'use strict';
var data = {
  name: 'root',
  root: true,
  isOpen: true,
  children: [
    {
      name: 'adiona',
      isOpen: true,
      children: [
        {
          name: 'adionalab',
          isOpen: false,
          children: [
            { name: 'Распределитель серверных процесов 1' },
            { name: 'Распределитель серверных процесов 2' }
          ]
        },
        {
          name: 'cyberionix',
          isOpen: false,
          children: [
            { name: 'Распределитель серверных процесов 1' },
            { name: 'Распределитель серверных процесов 2' }
          ]
        },
        { name: 'автоматизация deploy для dev' },
        { name: 'автоматизация deploy для production' },

      ]
    },
    { name: 'Распределитель серверных процесов 4' },
    { name: 'Распределитель серверных процесов 5' },
  ]
};

Vue.component('flows', {
  template: `
  <div class="flows-page">
    <div class="tree-directories-component">
      <tree
        :model="treeData">
      </tree>
    </div>
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
     <div v-on:click="toDetainsFlow(2)" class="card card-1 flow-item">
       <h3 class="flow-item-title">Распределитель серверных процесов 2</h3>
       <p>Автоматизация перезапуска серверов и проверка их на вирусы</p>
     </div>
     <div v-on:click="toDetainsFlow(3)" class="card card-1 flow-item">
       <h3 class="flow-item-title">Распределитель серверных процесов 3</h3>
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
     <div v-on:click="toDetainsFlow(2)" class="card card-1 flow-item">
       <h3 class="flow-item-title">Распределитель серверных процесов 2</h3>
       <p>Автоматизация перезапуска серверов и проверка их на вирусы</p>
     </div>
     <div v-on:click="toDetainsFlow(3)" class="card card-1 flow-item">
       <h3 class="flow-item-title">Распределитель серверных процесов 3</h3>
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
     <div v-on:click="toDetainsFlow(2)" class="card card-1 flow-item">
       <h3 class="flow-item-title">Распределитель серверных процесов 2</h3>
       <p>Автоматизация перезапуска серверов и проверка их на вирусы</p>
     </div>
     <div v-on:click="toDetainsFlow(3)" class="card card-1 flow-item">
       <h3 class="flow-item-title">Распределитель серверных процесов 3</h3>
       <p>Автоматизация перезапуска серверов и проверка их на вирусы</p>
     </div>
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
      isShowLogs: false,
      treeData: data
    }
  },
});