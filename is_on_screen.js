// isOnScreen 

jQuery.fn.isOnScreen = function(el){
  debugger;
    var element = jQuery(el).get(0);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}

var footer = jQuery("nav.footer-main-nav");
var isShown = 0

$(window).on("scroll", function(){
 if( footer.isOnScreen() && isShown == 0){
  //console.log("present");
  isShown = 1
  utag.link({
      event_name: "footer visible",
      event_action: "shown",
      event_type: "footer",
      page_id: utag.data.page_id
  });

////////////////////////////////////////////////////////////

jQuery.fn.isOnScreen = function(el){
  debugger;
    var element = jQuery(el).get(0);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}



jQuery.fn.isOnScreen('h4')


////////////////////////////////////////////////////////////

$.fn.isOnScreen = function(){
  try { 
      var element = this.get(0);
      var bounds = element.getBoundingClientRect();
      return bounds.top < window.innerHeight && bounds.bottom > 0;
  } catch(e) {}
}

var footer = jQuery("blahblah");
var isShown = 0

$(window).on("scroll", function(){
 if( footer.isOnScreen() && isShown == 0){
  //console.log("present");
  isShown = 1;
  console.log('element is present')
  } 
})
 /*} else {
  console.log("not present")*/
 /*};
})

