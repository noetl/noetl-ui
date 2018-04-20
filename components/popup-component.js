Vue.component('popup-component', {
  template: `
<div class="smart-popup-template" style="display: none;" #popup>
  <div *ngIf="backgroundEnable" data-close-inner-disabled #popupBg class="bg"></div>
  <div data-close-inner-disabled class="popup-body">
    <div data-close-inner-disabled #popupContent class="popup-content">
      <ng-content></ng-content>
    </div>
  </div>
</div>
  `,
  data: function () {
    return {
      isShowLogs: false
    }
  },
  created() {
    this.popupLayout = {};
    this.isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i) ? true : false;
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) ? true : false;
      },
      any: () => {
        return (this.isMobile.Android() || this.isMobile.BlackBerry() || this.isMobile.iOS() || this.isMobile.Windows());
      }
    };
  // @Input() popupId;
  // @Input() backgroundEnable = true;
  // @Input() theBackground = 'transparent';
  // @Input() fadeTime = 200;
  },
  mounted() {
    this.popupLayout = this.$el;
    // this.$smartPopups.popup('login').open()
  },
  methods: {
    open: function() {
      this.html.style.overflow = 'hidden';
      this.body.style.overflow = 'hidden';
      if (this.isMobile.iOS()) {
        this.body.style.position = 'fixed';
      }
      if (!this.isMobile.any()) {
        this.body.style.paddingRight = '17px';
      }
      this.popupLayout.style.opacity = 0;
      this.popupLayout.style.position = 'fixed';
      this.popupLayout.style.transition = 'opacity ' + this.fadeTime * 0.001 + 's ease-in-out';
      this.popupLayout.style.display = null;
      setTimeout(() => {
        this.popupLayout.style.opacity = 1;
        this.onOpenEvent.emit(null);
        this.isOpened = true;
      });
    },

    close: function() {
      this.popupLayout.style.opacity = 0;
      setTimeout(() => {
        this.isOpened = false;
        this.onCloseEvent.emit(null);
        this.popupLayout.style.display = 'none';
        this.html.style.overflow = null;
        this.body.style.overflow = null;
        this.body.style.position = null;
        if (!this.isMobile.any()) {
          this.body.style.paddingRight = null;
        }
      }, this.fadeTime);
    }
  },
});