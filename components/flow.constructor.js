Vue.component('flow-constructor', {
  template: `
  <div class="flow-constructor">
    <div class="flow-header">
      <div class="flow-title">
        <h1>flow name</h1>
      </div>
      <div class="flow-header-panel">
        <button v-on:click="layout()" class="layout_graph_button"></button>
      </div>
    </div>
    <div class="noetl-container">
      <div class="noetl-left-menu">
        <div class="noetl-left-menu-controls">
          <div class="group">
            <h3 class="group-label">Basic actions</h3>
            <div class="group-content">
              <div v-on:click="addShellElement()" class="actions noselect shell-action"><span>Shell Action</span></div>
              <div class="actions noselect rest-api-action"><span>Rest Api Action</span></div>
              <div class="actions noselect rest-api-action"><span>Flow Action</span></div>
            </div>
          </div>
        </div>
        <textarea id="adjacency-list" cols="35" rows="30"></textarea>
      </div>
      <div class="noetl-paper-wrapper dragscroll">
        <div id="paper"></div>
      </div>
      <div class="actions-form-wrapper">
        <div class="action-form-component">
          <div class="action-form-input">
            <span>title: </span>
            <input name="title" type="text" value="задача">
          </div>
          <div class="action-form-input">
            <span>description: </span>
            <textarea name="description"></textarea>
          </div>
          <div class="action-form-input">
            <span>settings1: </span>
            <input name="title" type="text" value="задача">
          </div>
          <div class="action-form-input">
            <span>settings2: </span>
            <select name="title" type="text" value="задача">
              <option>Пункт 1</option>
              <option>Пункт 2</option>
              <option>Пункт 3</option>
              <option>Пункт 4</option>
              <option>Пункт 5</option>
            </select>
          </div>
          <div class="action-form-input">
            <span>settings3: </span>
            <input name="title" type="text" value="задача">
          </div>
          <div class="action-form-input">
            <span>settings1: </span>
            <input name="title" type="text" value="задача">
          </div>
          <div class="action-form-input">
            <span>settings2: </span>
            <input name="title" type="text" value="задача">
          </div>
          <div class="action-form-input">
            <span>settings3: </span>
            <input name="title" type="text" value="задача">
          </div>
          <div class="action-form-input">
            <span>settings1: </span>
            <input name="title" type="text" value="задача">
          </div>
          <div class="action-form-input">
            <span>settings2: </span>
            <input name="title" type="text" value="задача">
          </div>
          <div class="action-form-input">
            <span>settings3: </span>
            <input name="title" type="text" value="задача">
          </div>
        </div>
      </div>
    </div>
    <terminal></terminal>
  </div>
  `,
  data: function () {
    return {
      graph: null,
      paper: null,
      isShowLogs: false
    }
  },
  methods: {
    layout: function () {
      try {
        var adjacencyList = JSON.parse($('#adjacency-list').val());
      } catch (error) {
        console.log(error);
      }
      var cells = this.adjacencyListToCells(adjacencyList);
      this.graph.resetCells(cells);
      joint.layout.DirectedGraph.layout(this.graph, {
        setLinkVertices: false,
        rankDir: "TB",
        marginX: 2000,
        marginY: 2000
      });
      document.querySelector('.dragscroll').scrollTo(1970, 1970);
    },
    adjacencyListToCells: function (adjacencyList) {
      var self = this;
      var elements = [];
      var links = [];
      _.each(adjacencyList, function (edges, parentElementLabel) {
        elements.push(self.makeElement(parentElementLabel));
        _.each(edges, function (childElementLabel) {
          links.push(self.makeLink(parentElementLabel, childElementLabel));
        });
      });
      var cells = elements.concat(links);
      return cells;
    },
    makeLink: function (parentElementLabel, childElementLabel) {
      return new joint.dia.Link({
        source: {id: parentElementLabel},
        target: {id: childElementLabel},
        attrs: {
          '.marker-target': {d: 'M 10 0 L 0 5 L 10 10 z'}
        },
        smooth: false
      });
    },
    makeElement: function (label) {
      return new joint.shapes.html.ActionElement({
        position: {x: 80, y: 80},
        id: label,
        size: {width: 170, height: 100},
        label: label,
        isActive: false
      });
    },
    addShellElement: function () {
      var cell = new joint.shapes.html.ActionElement({
        position: {x: 2000, y: 2000},
        size: {width: 170, height: 100},
        label: 'задача',
        isActive: false
      });
      this.graph.addCell(cell);
    }
  },
  mounted() {
    self = this;
    this.graph = new joint.dia.Graph;
    this.paper = new joint.dia.Paper({
      el: $('#paper'),
      width: "10000",
      height: "10000",
      gridSize: 10,
      model: this.graph
    });
    var activeElementView;
    var lastActiveElementView;
    this.graph.on('add', function (cell, collection, opt) {
      console.log(collection);
    });
    this.paper.on('cell:pointerdown',
      function (cellView, evt, x, y) {
        activeElementView = cellView;
        if (!activeElementView.model.get('isActive')) {
          if (activeElementView != undefined) {
            activeElementView.model.set('isActive', true);
          }
          if (lastActiveElementView != undefined) {
            lastActiveElementView.model.set('isActive', false);
          }
        }
        document.querySelector('.dragscroll').setAttribute('nochilddrag', '');
      }
    );
    this.paper.on('cell:pointerup',
      function (cellView, evt, x, y) {
        lastActiveElementView = cellView;
        document.querySelector('.dragscroll').removeAttribute('nochilddrag');
      }
    );
    this.paper.on('blank:pointerdown', function () {
        if (lastActiveElementView != undefined) {
          lastActiveElementView.model.set('isActive', false);
        }
      }
    );
    dragscroll.reset();
    this.paper.$el.on('mousewheel DOMMouseScroll', function onMouseWheel(e) {
      e.preventDefault();
      e = e.originalEvent;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))) / 50;
      var offsetX = (e.offsetX || e.clientX - $(this).offset().left);
      var offsetY = (e.offsetY || e.clientY - $(this).offset().top);
      var p = offsetToLocalPoint(offsetX, offsetY);
      var newScale = V(self.paper.viewport).scale().sx + delta;
      if (newScale > 0.4 && newScale < 2) {
        self.paper.setOrigin(0, 0);
        self.paper.scale(newScale, newScale, p.x, p.y);
        $('#html_elements').css('transform', $(self.paper.viewport).attr('transform'));
      }
    });

    function offsetToLocalPoint(x, y) {
      var svgPoint = self.paper.svg.createSVGPoint();
      svgPoint.x = x;
      svgPoint.y = y;
      var pointTransformed = svgPoint.matrixTransform(self.paper.viewport.getCTM().inverse());
      return pointTransformed;
    }

    var startGraph = {
      "job1": ["step1", "step2"],
      "step1": ["step2"],
      "step2": ["step3", "step4"],
      "step3": ["step5"],
      "step4": ["step5"],
      "step5": []
    };
    $('#adjacency-list').html(JSON.stringify(startGraph, null, 1));

    this.layout();
  },
  beforeDestroy: function () {
    this.graph.off();
    this.graph.clear();
    this.paper.undelegateEvents();
    this.paper.off();
    this.paper.$el.off();
    this.paper.remove();
  },
});