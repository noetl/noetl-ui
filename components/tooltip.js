(function () {


  function createTooltip(data) {
    var tooltip = document.createElement('span');
    tooltip.className = "tooltip " + data.position;
    tooltip.innerHTML = data.title;

    var arrow = document.createElement('div');
    arrow.className = "tooltip-arrow";
    tooltip.appendChild(arrow);

    document.body.appendChild(tooltip);
    positionTooltip({
      el: data.el,
      position: data.position,
      tooltip: tooltip
    });
    tooltip.style.opacity = '1';

    return tooltip;
  }

  function positionTooltip(data){
    var positionElement = data.el.getBoundingClientRect();

    var scrollY = window.pageYOffset;
    var tooltipOffset = 8;

    var widthTooltip = data.tooltip.offsetWidth + 1;
    var heightTooltip = data.tooltip.offsetHeight + 1;

    var positionTooltip = {};
    var delta;
    var tooltipArrow = data.tooltip.getElementsByTagName('div')[0];

    if (data.position === 'top'){
      positionTooltip.Y0 = (positionElement.top + scrollY) - (heightTooltip + tooltipOffset);
    }
    if (data.position === 'bottom'){
      positionTooltip.Y0 = positionElement.bottom + tooltipOffset;
    }

    if ((data.position === 'top') || (data.position === 'bottom')){
      var arrowWidth = 6;
      var positionCenterX = (positionElement.left + positionElement.right) / 2;

      positionTooltip.X0 = positionCenterX - (widthTooltip / 2);

      if (positionTooltip.X0 < 0){
        delta = positionTooltip.X0 * (-1);
        tooltipArrow.style.left = (widthTooltip / 2 - delta) - arrowWidth + 'px';
        positionTooltip.X0 = 0;
      }

      positionTooltip.X1 = positionTooltip.X0 + widthTooltip;
      var widthBody = document.body.clientWidth;

      if (positionTooltip.X1 > widthBody){
        delta = positionTooltip.X1 - widthBody;
        tooltipArrow.style.left = (widthTooltip / 2 + delta) - arrowWidth + 'px';
        positionTooltip.X0 = positionTooltip.X0 - delta;
      }
    }
    if (data.position === 'left'){
      positionTooltip.X0 = positionElement.left - (widthTooltip + tooltipOffset);
    }
    if (data.position === 'right'){
      positionTooltip.X0 = positionElement.right + tooltipOffset;
    }
    if ((data.position === 'left') || (data.position === 'right')){
      var arrowHeight = 6;
      var positionCenterY = (positionElement.top + positionElement.bottom) / 2;

      positionTooltip.Y0 = positionCenterY - (heightTooltip / 2);

      if (positionTooltip.Y0 < 0){
        console.log(positionTooltip.Y0);
        delta = positionTooltip.Y0 * (-1);
        tooltipArrow.style.top = (heightTooltip / 2 - delta) - arrowHeight + 'px';
        positionTooltip.Y0 = 0;
      }

      positionTooltip.Y1 = positionTooltip.Y0 + heightTooltip;
      var heightBody = document.body.clientHeight;

      if (positionTooltip.Y1 > heightBody){
        delta = positionTooltip.Y1 - heightBody;
        tooltipArrow.style.top = (heightTooltip / 2 + delta) - arrowHeight + 'px';
        positionTooltip.Y0 = positionTooltip.Y0 - delta;
      }
    }
    data.tooltip.style.left = positionTooltip.X0 + 'px';
    data.tooltip.style.top = positionTooltip.Y0 + 'px';
  }
  function deleteTooltip(data) {
    if(data.tooltip!==undefined){
      data.tooltip.style.opacity = '0';
      setTimeout(function () {
        if(data.tooltip.parentNode!==null)
          data.tooltip.parentNode.removeChild(data.tooltip);
      }, 200);
    }
  }


  Vue.directive('tooltip', {
    inserted: function (el, binding) {
      var tooltip;
      var createTooltipHover = function() {
        tooltip = createTooltip({
          el: el,
          title: binding.value.title,
          position: binding.value.position
        });
      };

      if (binding.arg === 'hover'){
        el.addEventListener("mouseenter", createTooltipHover);
        // setTimeout(function () {
        //   el.removeEventListener('mouseenter', createTooltipHover);
        // }, 5000);

        el.addEventListener("mouseleave", function () {
          deleteTooltip({
            tooltip: tooltip
          });
        });
      }

      if (binding.arg === 'click'){
        var tooltipIsVisible = false;
        el.addEventListener("click", function (event) {
          event.stopPropagation();
          console.log('el click');
          if (!tooltipIsVisible){
            tooltip = createTooltip({
              el: el,
              title: binding.value.title,
              position: binding.value.position
            });
            tooltipIsVisible = true;
          } else {
            deleteTooltip({
              tooltip: tooltip
            });
            tooltipIsVisible = false;
          }
        });
        document.body.addEventListener("click", function () {
          console.log('body click');
          if (tooltipIsVisible === true){
            deleteTooltip({
              tooltip: tooltip
            });
            tooltipIsVisible = false;
          }
        });
      }
    }
  });


}());




