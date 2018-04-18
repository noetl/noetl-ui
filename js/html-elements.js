(function () {
  joint.shapes.html = {};
  joint.shapes.html.ActionElement = joint.shapes.basic.Rect.extend({
    defaults: joint.util.deepSupplement({
      type: 'html.ActionElement',
      attrs: {
        rect: {stroke: 'none', 'fill-opacity': 0}
      }
    }, joint.shapes.basic.Rect.prototype.defaults)
  });
  joint.shapes.html.ActionElementView = joint.dia.ElementView.extend({

    template: [
      '<div class="action-element">',
      '<button class="delete">×</button>',
      '<span class="title"></span>',
      '</div>'
    ].join(''),

    initialize: function () {
      _.bindAll(this, 'updateBox');
      joint.dia.ElementView.prototype.initialize.apply(this, arguments);
      this.$box = $(_.template(this.template)());
      this.$box.find('.delete').on('click', _.bind(this.model.remove, this.model));
      this.model.on('change', this.updateBox, this);
      this.updateBox();
    },
    render: function () {
      joint.dia.ElementView.prototype.render.apply(this, arguments);
      var html_elements = this.paper.$el.find('#html_elements');
      if(html_elements[0] == undefined) {
        html_elements = $('<div id="html_elements"></div>');
        this.paper.$el.append(html_elements);
      }
      html_elements.prepend(this.$box);
      this.updateBox();
      return this;
    },
    updateBox: function () {
      if (!this.paper) return;
      var bbox = this.model.getBBox();
      this.$box.find('.title').text(this.model.get('label'));
      this.$box.css({
        transform: 'translate('+ bbox.x +'px, '+ bbox.y +'px)',
        width: bbox.width,
        height: bbox.height
      });
      if (this.model.get('isActive') != undefined && this.model.get('isActive')) {
        this.$box.addClass('active');
      } else {
        this.$box.removeClass('active');
      }
    },
    remove: function () {
      joint.dia.ElementView.prototype.remove.apply(this, arguments);
      this.stopListening(this.paper, 'scale', this.updateBox);
      this.stopListening(this.paper, 'translate', this.updateBox);
      this.$box.remove();
    }
  });
}());
