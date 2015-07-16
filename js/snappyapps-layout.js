function snappyappsRefresh(){
  var layouts = document.getElementsByClassName('sa-layout');
  layouts = [].slice.call(layouts);
  layouts.forEach(function(layout){
    layout.setAttribute("style", "height:" + (layout.parentElement.clientHeight) + "px; width:" + (layout.parentElement.offsetWidth) + "px") ;

  })
}

window.addEventListener('resize', snappyappsRefresh);
window.addEventListener('load', snappyappsRefresh);