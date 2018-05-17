Vue.component('confirmation-message-popup', {
  template: `
<popup-component 
 v-bind:popupId="popupId">
  <div class="noetl-popup">
    <span data-close class="close">×</span>
    <div class="create-project-popup">
      <div style="color: white; padding: 15px">
        <slot></slot>
      </div>
      <div class="buttons" style="display: flex">
        <button style="margin-right: 7px" class="noetl-button" v-on:click="clickYes()">YES</button>
        <button style="margin-left: 7px" class="noetl-button" v-on:click="clickNo()">NO</button>
      </div>
    </div>
  </div> 
</popup-component>
  `,
  props: {
    id:{
      type: String,
      required: true
    },
    onClickYes: {
      type: Function,
      default: function (path) {}
    },
    onClickNo: {
      type: Function,
      default: function (path) {}
    }
  },
  data: function () {
    return {
      popupId: 'confirmation-message:' + this.id,
      path: ''
    }
  },
  created() {

  },
  mounted() {
    $popupService.registerPopupComponent(this.popupId,this);
  },
  beforeDestroy: function () {

  },
  methods: {
    clickYes: function(){
      this.onClickYes(this.path);
      this.close();
    },
    clickNo: function(){
      this.onClickNo(this.path);
      this.close();
    },
    open: function(path) {
      $popupService.popup(this.popupId).open();
      this.path = path;
    },
    close: function() {
      $popupService.popup(this.popupId).close();
      this.path = '';
    }
  }
});