var hrefs = [
  "https://developer.vantiv.com/servlet/JiveServlet/downloadBody/2582-102-1-5241/Practical_Payments_FINAL.pdf",
  "https://developer.vantiv.com/servlet/JiveServlet/downloadBody/2583-102-3-5405/triPOS_whitepaper.pdf",
  "https://developer.vantiv.com/servlet/JiveServlet/downloadBody/2569-102-1-5237/Payment%20Gateway%20Whitepaper.pdf",
  "https://developer.vantiv.com/servlet/JiveServlet/downloadBody/2565-102-1-5224/POS%20-%20EMV%20Direct%20vs.%20Semi%20Integration_update%20copywrite.pdf"
];


var buttons = document.querySelectorAll('a.button');

if(buttons){
  Array.prototype.forEach.call(buttons, function(button){
    if (hrefs.indexOf(button.getAttribute('href')) !== -1 ) {
      button.addEventListener('mousedown', function(){utag.link();}, false);
    }
  });
}


var boxes = document.querySelectorAll('input[type=checkbox]');
var form = document.querySelectorAll('body > div.container-fluid.sweep-custom-background > div > div > div.col-md-4 > form');

if(boxes){
  Array.prototype.forEach.call(boxes, function(box){
    if(box.prop('checked')){
      form.addEventListener('submit', function(){utag.link({'newsletter_signup_trigger':'true'});}, false);
    }
  });
}
