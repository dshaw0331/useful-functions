function poll(check, callback, onfail, timeout, interval) {
  function now(t) {return Number(new Date) + Number(t || 0)};
  onfail = onfail && 'function' == typeof onfail ? onfail : function(e) {console.log(e)};
  var endTime = now() + (timeout || 2e3);
  interval = interval || 100;
  (function p() {
    try {
      if (check()) {
        callback();
      } else if (now() < endTime) {
        setTimeout(p, interval);
      } else {throw new Error('poll.timeout: cond never met')}
    } catch (e) {onfail(e); return}
  })();
}

var config = {
  check: function check() {
    return document.querySelector('#selector'); // enter selector here
  },
  track: function() {
    console.log('element is on page'); // do something here
  },
  onfail: function(e) {
    console.log(e);
  },
  timeout: 50000,
  inverval: 1000
}; 

poll(config.check, config.track, config.onfail, config.timeout, config.interval); 