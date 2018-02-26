var searchObjectForKey = function(obj, key){
	if(typeof obj[key] != 'undefined'){return obj[key]}
	var result, k; 
	for(k in obj){
		if(obj.hasOwnProperty(k) && typeof obj[k] === 'object'){
			result = searchObjectForKey(obj[k], key);
			if(result){break;}
		}
	}
	return result;
}

