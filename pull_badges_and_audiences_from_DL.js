var badges_and_audiences = [], badge_string, audience_string;
var keys = Object.keys(utag.data);
for (var i in keys) {
	keys[i] = keys[i];
    if (keys[i].indexOf('badges') > -1) {
    	// badge_string = removePrefix(keys[i])
    	badge_string = removePrefix(keys[i]) + ':true';
        badges_and_audiences.push(badge_string);
    } else if (keys[i].indexOf('audiences') > -1 ){
    	audience_string = removePrefix(keys[i]) + ':' + utag.data[keys[i]];
		badges_and_audiences.push(audience_string);
    }
}


function removePrefix(key){
	return key.split('.')[2]
}

b.badges_and_audiences = badges_and_audiences.join(',')


