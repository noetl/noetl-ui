'use strict';
Vue.component('admin', {
  template: `
  <div class="admin-page">
    <div class="flow-header">
      <div class="flow-title">
        <h1>NOETL</h1>
      </div>
      <div class="flow-header-panel">
        <!--<button class="noetl-button" v-on:click="openPopupNewProject()">new project</button>-->
      </div>
    </div>
    <div class="noetl-container">
      <div class="noetl-left-menu">
        <div class="menu-group">
          <router-link class="menu-item" v-bind:to="{ name: 'flows'}">flows</router-link>
          <router-link class="menu-item" v-bind:to="{ name: 'processes'}">processes</router-link>
        </div>
      </div>
      <div class="noetl-paper-wrapper">
        <router-view></router-view>
      </div>
      
    </div>
    <div class="flow-footer">
      <button class="button-logs">support</button>
      <button class="button-logs">contact us</button>
      <button class="button-logs">our team</button>
    </div>
    
  </div>
  `,
  mounted() {
    //$popupService.popup('create').open();
  },
  methods: {
    openPopupNewProject: function() {
      $popupService.popup('create').open();
    },
    toDetainsFlow: function(flowId) {
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