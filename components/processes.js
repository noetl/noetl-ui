'use strict';
Vue.component('processes', {
  template: `
   <div class="flows">
     <div v-on:click="toDetainsFlow(1)" class="card card-1 flow-item">
       <h3 class="flow-item-title">Распределитель серверных процесов 1</h3>
       <p>Автоматизация перезапуска серверов и проверка их на вирусы Автоматизация перезапуска серверов и проверка их на вирусы
       Автоматизация перезапуска серверов и проверка их на вирусы
       Автоматизация перезапуска серверов и проверка их на вирусы
       Автоматизация перезапуска серверов и проверка их на вирусы
       Автоматизация перезапуска серверов и проверка их на вирусыАвтоматизация перезапуска серверов и проверка их на вирусыАвтоматизация перезапуска серверов и проверка их на вирусы     
       </p>
     </div>
     <div v-on:click="toDetainsFlow(2)" class="card card-1 flow-item">
       <h3 class="flow-item-title">Распределитель серверных процесов 2</h3>
       <p>Автоматизация перезапуска серверов и проверка их на вирусы</p>
     </div>
     <div v-on:click="toDetainsFlow(3)" class="card card-1 flow-item">
       <h3 class="flow-item-title">Распределитель серверных процесов 3</h3>
       <p>Автоматизация перезапуска серверов и проверка их на вирусы</p>
     </div>
     <div v-on:click="toDetainsFlow(1)" class="card card-1 flow-item">
       <h3 class="flow-item-title">Распределитель серверных процесов 1</h3>
       <p>Автоматизация перезапуска серверов и проверка их на вирусы</p>
     </div>
     <div v-on:click="toDetainsFlow(2)" class="card card-1 flow-item">
       <h3 class="flow-item-title">Распределитель серверных процесов 2</h3>
       <p>Автоматизация перезапуска серверов и проверка их на вирусы</p>
     </div>
     <div v-on:click="toDetainsFlow(3)" class="card card-1 flow-item">
       <h3 class="flow-item-title">Распределитель серверных процесов 3</h3>
       <p>Автоматизация перезапуска серверов и проверка их на вирусы</p>
     </div>
   </div>
  `,
  mounted() {
    //$popupService.popup('create').open();
  },
  methods: {
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