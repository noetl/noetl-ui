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
  </div>
  `,
  methods: {
    toDetainsFlow: function (flowId) {
      this.$router.push('/flow/' + flowId);
    }
  },
  data: function () {
    return {
      isShowLogs: false
    }
  },
});