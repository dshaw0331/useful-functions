
// BIND FIRST
//
// http://jsfiddle.net/x8Na8/2/
// [name] is the name of the event "click", "mouseover", .. 
// same as you'd pass it to bind()
// [fn] is the handler function
jQuery.fn.bindFirst = function(name, fn) {
    // bind as you normally would
    // don't want to miss out on any jQuery magic
    this.on(name, fn);
    // Thanks to a comment by @Martin, adding support for
    // namespaced events too.
    this.each(function() {
        var handlers = jQuery._data(this, 'events')[name.split('.')[0]];
        // console.log(handlers);
        // take out the handler we just inserted from the end
        var handler = handlers.pop();
        // move it at the beginning
        handlers.splice(0, 0, handler);
    });
};

//example
jQuery('.select2-search__field').bindFirst('keydown', function (e) {

});
