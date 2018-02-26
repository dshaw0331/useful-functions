// build event listener array for all events
var all_events = [], subkeys, utui.constants;
Object.keys(obj).forEach(function(key){
	subkeys = Object.keys(obj[key]);
	subkeys.forEach(function(subkey){
		all_events.push(obj[key][subkey]);
	})
})