// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //null cases
  if (obj === null){
  	return 'null';
  }
  else if (obj === undefined || typeof(obj) == 'function'){
  	return '';
  }
  //strings
  else if(typeof(obj) == 'string'){
  	return '"' + obj + '"';
  }
  //arrays
  else if (Array.isArray(obj)){
  	if (obj.length > 0) {
  		var jsonArray = [];
  		for (i=0; i < obj.length; i++){
  			jsonArray.push(stringifyJSON(obj[i]));
  			console.log(jsonArray);
  		}
  		return "[" + jsonArray + "]";
  	}
  	else if (obj.length == 0){
  		return('[]');
  	}
  }
  //objects
   else if (typeof(obj) == "object"){
  	if (Object.keys(obj).length == 0){
  		return '{}';
  	}
  	else {
  		var jsonObject = '{';
  		var keys = Object.keys(obj);
  		var lastKey = keys[keys.length-1];
  		for (var i in obj){
  			if (obj[i] === undefined){
  				return '{}';
  			}
  			else if(obj[i] == 'function'){
  				return '{}';
  			}
  			else if (i === lastKey){
  				jsonObject += stringifyJSON(i) + ":" + stringifyJSON(obj[i]);
  			}
  			else{
  				jsonObject += stringifyJSON(i) + ":" + stringifyJSON(obj[i]) + ",";
  			}
  		}
  		return jsonObject + '}';
  	}
  }
  else if (typeof(obj) == 'number' || 'boolean'){
  	return obj.toString();
  }
};