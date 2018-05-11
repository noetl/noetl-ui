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
    return {

    }
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
      $popupService.popup('create').open();
      this.model.children.push({
        name: 'new flow'
      })
    },
    sortByDirectories: function(array) {
      var copy = Object.assign([], array);
      copy.sort(function (a, b){
        if(a.children==undefined && b.children!==undefined)
          return 1;
        else return 0;
      });
      return copy;
    },
    addDirectory: function () {
      console.log(this.path);
      this.model.children.push({
        name: 'new directory',
        isOpen: true,
        children: []
      })
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
    
    <popup-component 
    v-bind:popupId="'create'">
      <div class="noetl-popup">
        <span data-close class="close">×</span>
        <div class="create-project-popup">
          <h3>Create new project</h3>
          <div class="action-form-component">
            <div class="action-form-input">
              <span>project name: </span>
              <input name="title" type="text" value="">
            </div>
            <div class="action-form-input">
              <span>project group: </span>
              <input name="title" type="text" value="">
            </div>
            <div class="action-form-input">
              <span>project description: </span>
              <textarea name="description"></textarea>
            </div>
          </div>
          <button class="noetl-button" v-on:click="createProject(0)">Create project</button>
        </div>
      </div> 
    </popup-component>
  </ul>
  `,
  props: {
    model: Object,
    path: String
  },
  data: function () {
    return {

    }
  },
});