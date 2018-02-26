
//
// WAIT FOR
//
utag.ut.waitFor = utag.ut.waitFor || function(function_to_check, function_to_run, interval_time, max_runs, this_run){
  if(typeof max_runs === 'undefined') {
    max_runs = 10;
  }
  if(typeof this_run === 'undefined') {
    this_run = 1;
  }
  if(typeof interval_time === 'undefined') {
    interval_time = 50;
  }
  if(max_runs < this_run) {
    return;
  }
  if(function_to_check()){
    function_to_run();
    return;
  } else {
    this_run++;
    setTimeout(function(){
      utag.ut.waitFor(function_to_check, function_to_run, interval_time, max_runs, this_run);
    }, interval_time);
  }
}

//example
utag.ut.waitFor(
  function(){
    return jQuery('#promoBottom') && jQuery('#promoBottom').length > 0 
  },
  function(){

    document.write = function (text) { 
  $("#promoBottom ins").append(text);
  };


    var promoDiv = document.getElementById('promoBottom');

    var ins = document.createElement('ins');

    var classAttr = document.createAttribute('class');
    classAttr.value = 'dcmads';
    ins.setAttributeNode(classAttr);

    var styleAttr = document.createAttribute('style');
    styleAttr.value = 'display:inline-block;width:500px;height:400px';
    ins.setAttributeNode(styleAttr);

    var dataAttr1 = document.createAttribute('data-dcm-placement');
    dataAttr1.value = 'N6103.2202700SHOPSMARTER/B20473939.208749758'
    ins.setAttributeNode(dataAttr1);

    var dataAttr2 = document.createAttribute('data-dcm-rendering-mode');
    dataAttr2.value = 'script';
    ins.setAttributeNode(dataAttr2);

    var dataAttr3 = document.createAttribute('data-dcm-https-only');
    dataAttr3.value = '';
    ins.setAttributeNode(dataAttr3);

    var dataAttr4 = document.createAttribute('data-dcm-resettable-device-id');
    dataAttr4.value = '';
    ins.setAttributeNode(dataAttr4);

    var dataAttr5 = document.createAttribute('data-dcm-app-id');
    dataAttr5.value = ''
    ins.setAttributeNode(dataAttr5);


    var promoScript = document.createElement('script');

    var srcAttr = document.createAttribute('script');
    srcAttr.value = 'https://www.googletagservices.com/dcm/dcmads.js';
    promoScript.setAttributeNode(srcAttr);

    ins.appendChild(promoScript);

    promoDiv.appendChild(ins);
  }
);





