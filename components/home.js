'use strict';
Vue.component('home', {
  template: `
  <div class="flows-page">
    <div class="flow-header">
      <div class="flow-title">
        <h1>NOETL</h1>
      </div>
      <div class="flow-header-panel">
        
      </div>
    </div>
    <div class="noetl-container">
      <div class="flows-grid">
        <div v-on:click="toDetainsFlow(0)" class="create-flow">
          <span class="plus">+</span>
          <span class="text">New project</span>
        </div>
        <div v-on:click="toDetainsFlow(1)" class="flow-item-grid">
          <h3 class="flow-item-grid-title">Распределитель серверных процесов 1</h3>
          <p>Автоматизация перезапуска серверов и проверка их на вирусы</p>
        </div>
        <div v-on:click="toDetainsFlow(2)" class="flow-item-grid">
          <h3 class="flow-item-grid-title">Распределитель серверных процесов 2</h3>
          <p>Автоматизация перезапуска серверов и проверка их на вирусы</p>
        </div>
        <div v-on:click="toDetainsFlow(3)" class="flow-item-grid">
          <h3 class="flow-item-grid-title">Распределитель серверных процесов 3</h3>
          <p>Автоматизация перезапуска серверов и проверка их на вирусы</p>
        </div>
      </div>
    </div>
    <div class="flow-footer">
      <button class="button-logs">support</button>
      <button class="button-logs">contact us</button>
      <button class="button-logs">our team</button>
    </div>
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
              <span>project description: </span>
              <textarea name="description"></textarea>
            </div>
          </div>
          <button class="noetl-button" v-on:click="createProject(0)">Create project</button>
          <button class="noetl-button">import project</button>
        </div>
      </div> 
    </popup-component>
  </div>
  `,
  mounted() {
    //$popupService.popup('create').open();
  },
  methods: {
    toDetainsFlow: function(flowId) {
      if(flowId === 0) {
        $popupService.popup('create').open();
      } else
      this.$router.push('/flow/' + flowId);
    },
    createProject: function(flowId) {
      this.$router.push('/flow/' + flowId);
    },
  },
  data: function () {
    return {
      isShowLogs: false
    }
  },
});