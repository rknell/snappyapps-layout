function refresh(){
  var layouts = document.getElementsByClassName('sa-layout');
  layouts = [].slice.call(layouts);
  console.log(layouts);
  layouts.forEach(function(layout){
    console.log('parentHeight', layout.parentElement.clientWidth);
    console.log('scrollHeight', layout.parentElement.scrollWidth);
    console.log('offsetHeight', layout.parentElement.offsetWidth);
    layout.setAttribute("style", "height:" + (layout.parentElement.clientHeight) + "px; width:" + (layout.parentElement.offsetWidth) + "px") ;

  })
}

window.addEventListener('resize', refresh);
window.addEventListener('load', refresh);