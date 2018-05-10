'use strict';

Vue.component('tree-item', {
  template: `
  <li>
    <div class="item-header-container">
      <div class="fas-tree-directory"
        v-if="isFolder"
        v-bind:class="{ 'fa-folder-open': open, 'fa-folder': !open}"
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
        v-show="open" v-if="isFolder">
      <tree-item
        class="item-tree"
        v-for="(model, index) in model.children"
        :key="index"
        :model="model">
      </tree-item>
    </ul>
  </li>
  `,
  props: {
    model: Object
  },
  data: function () {
    return {
      open: false
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
        this.open = open
      }
    },
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    changeType: function () {
      if (!this.isFolder) {
        Vue.set(this.model, 'children', [])
        this.open = true
      }
    },
    toDashboard: function () {

    },
    addflow: function () {
      this.model.children.push({
        name: 'new flow'
      })
    },
    addDirectory: function () {
      this.model.children.push({
        name: 'new directory',
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
      :model="model">
    </tree-item>
  </ul>
  `,
  props: {
    model: Object
  },
  data: function () {
    return {

    }
  },
});