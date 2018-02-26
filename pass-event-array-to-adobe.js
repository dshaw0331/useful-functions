//var s = {events: ''} 

var mapKeys = Object.keys(u.map), events = [];

if(typeof b.event_type === 'object'){
	for(var i = 0; i < b.event_type.length; i++){
		mapKeys.filter(function(thing){return thing.indexOf(b.event_type[i]) > 0}).forEach(function(key){
			events.push(u.map[key]);
		})
	}
	if(events.length){
		s.events = events.join(',');
	}
}