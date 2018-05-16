Vue.component('new-project-popup', {
  template: `
<popup-component 
 v-bind:popupId="'new-project'">
  <div class="noetl-popup">
    <span data-close class="close">×</span>
    <div class="create-project-popup">
      <h3>Create new project</h3>
      <div class="action-form-component">
        <div class="action-form-input">
          <span>project name: </span>
          <input name="title" type="text" v-model="form.name">
        </div>
        <div class="action-form-input">
          <span>project description: </span>
          <textarea name="description" v-model="form.description"></textarea>
        </div>
      </div>
      <button class="noetl-button" v-on:click="create(path)">Create project</button>
    </div>
  </div> 
</popup-component>
  `,
  props: {
    createProject: {
      type: Function,
      default: function (path, dirName) {}
    }
  },
  data: function () {
    return {
      form: {
        name: '',
        description: '',
      },
      path: ''
    }
  },
  created() {

  },
  mounted() {
    $popupService.registerPopupComponent('new-project',this);
  },
  beforeDestroy: function () {

  },
  methods: {
    create: function(path){
      this.createProject(path, {
        name: this.form.name,
        description: this.form.description,
      });
      this.close();
    },
    open: function(path) {
      $popupService.popup('new-project').open();
      this.path = path;
    },

    close: function() {
      $popupService.popup('new-project').close();
      this.path = '';
      this.form.name = '';
      this.form.description = '';
    }
  }
});