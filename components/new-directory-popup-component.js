Vue.component('new-directory-popup', {
  template: `
<popup-component 
 v-bind:popupId="'new-directory'">
  <div class="noetl-popup">
    <span data-close class="close">×</span>
    <div class="create-project-popup">
      <h3>Create new directory</h3>
      <div class="action-form-component">
        <div class="action-form-input">
          <span>directory name: </span>
          <input name="title" type="text" value="" v-model="dirName">
        </div>
      </div>
      <button class="noetl-button" v-on:click="create(path, dirName)">Create directory</button>
    </div>
  </div> 
</popup-component>
  `,
  props: {
    createDirectory: {
      type: Function,
      default: function (path, dirName) {}
    }
  },
  data: function () {
    return {
      dirName: '',
      path: ''
    }
  },
  created() {

  },
  mounted() {
    $popupService.registerPopupComponent('new-directory',this);
  },
  beforeDestroy: function () {

  },
  methods: {
    create: function(path, dirName){
      this.createDirectory(path, dirName);
      this.close();
    },
    open: function(path) {
      $popupService.popup('new-directory').open();
      this.path = path;
    },

    close: function() {
      $popupService.popup('new-directory').close();
      this.path = '';
      this.dirName = 0;
    }
  }
});