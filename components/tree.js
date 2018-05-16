'use strict';

Vue.component('tree-item', {
  template: `
  <li>
    <div class="item-header-container">
      <div class="fas-tree-directory"
        v-if="isFolder"
        v-bind:class="{ 'fa-folder-open': model.isOpen, 'fa-folder': !model.isOpen}"
        v-on:click="toggle">
      </div>
      <div class="fas-tree-directory fa-code-branch"
        v-if="!isFolder"
        v-on:click="toDashboard">
      </div>
      <div class="fas-tree-directory"
        v-bind:class="{bold: isFolder}"
        v-on:dblclick="toggle">
        {{ model.name }}
      </div>
      <div class="tree-item-panel">
        <div class="tree-item-panel-icon" 
             v-on:click="addflow(); setOpen(true);" v-show="isFolder"
             v-tooltip:hover="{ title: 'New flow', position: 'top' }">
          <i class="fas fa-code-branch"></i>
        </div>
        <div class="tree-item-panel-icon" 
             v-on:click="addDirectory(); setOpen(true);" v-show="isFolder"
             v-tooltip:hover="{ title: 'New folder', position: 'top' }">
          <i class="fas fa-folder-open"></i>
        </div>
        <div class="tree-item-panel-icon"
             v-show="!model.root && isFolder"
             v-tooltip:hover="{ title: 'Remove folder recursive', position: 'top' }">
          <i class="fas fa-trash-alt"></i>
        </div>
        <div class="tree-item-panel-icon"
             v-show="!model.root && !isFolder"
             v-tooltip:hover="{ title: 'Remove flow', position: 'top' }">
          <i class="fas fa-trash-alt"></i>
        </div>
      </div>
    </div>
    <ul class="tree-directory"
        v-show="model.isOpen" v-if="isFolder">
      <tree-item
        class="item-tree"
        v-for="(model, index) in sortByDirectories(model.children)"
        :key="index"
        :model="model"
        :path="path + '/' + model.name">
      </tree-item>
    </ul>
  </li>
  `,
  props: {
    model: Object,
    path: String
  },
  data: function () {
    return {}
  },
  computed: {
    isFolder: function () {
      return this.model.children
    }
  },
  methods: {
    setOpen: function (open) {
      if (this.isFolder) {
        this.model.isOpen = open
      }
    },
    toggle: function () {
      if (this.isFolder) {
        this.model.isOpen = !this.model.isOpen
      }
    },
    toDashboard: function () {

    },
    addflow: function () {
      $popupService.getPopupComponent('new-project').open(this.path);
    },
    sortByDirectories: function (array) {
      var copy = Object.assign([], array);
      copy.sort(function (a, b) {
        if (a.children == undefined && b.children !== undefined)
          return 1;
        else return 0;
      });
      return copy;
    },
    addDirectory: function () {
      $popupService.getPopupComponent('new-directory').open(this.path);
    }
  }
});

Vue.component('tree', {
  template: `
  <ul class="tree-directory tree-directory-root">
    <tree-item
      class="item-tree"
      :model="model"
      :path="model.name">
    </tree-item>
    <new-directory-popup v-bind:createDirectory="createDirectory"></new-directory-popup>
    <new-project-popup v-bind:createProject="createProject"></new-project-popup>
  </ul>
  `,
  props: {
    model: Object,
    path: String
  },
  data: function () {
    return {}
  },
  methods: {
    getListFailsByPath: function (path) {
      let arrayPath = path.split('/');
      console.log(arrayPath);
      let directoryObj = [this.model];
      for (let i = 0; i < arrayPath.length; i++) {
        for (let j = 0; j < arrayPath.length; j++) {
          if(directoryObj[j].name === arrayPath[i]) {
            directoryObj = directoryObj[j].children;
            break;
          }
        }
      }
      return directoryObj;
    },
    createDirectory: function (path, dirName) {
      this.getListFailsByPath(path).push({
        name: dirName,
        isOpen: true,
        children: []
      });
    },
    createProject: function (path, projectData) {
      this.getListFailsByPath(path).push({
        name: projectData.name
      });
    }
  },
});