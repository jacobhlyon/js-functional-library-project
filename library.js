var fi = (function() {
  return {
    libraryMethod: function() {return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'},
    each: function(list, iteratee, context = window) {
    	//pass context if given to iteratee
    	//iteratee accepts 3 arguments: element, index, list itself
	    	for(let i = 0; i < list.length; i++){
	    		let element = list[i]
	    		let index = i
	    		let array = list
	    		// iteratee(element, index, array)
	    		iteratee.call(context, element, index, array);
	    	}
	    	return list;	
		},
    map: function(list, iteratee, context = window){
    		let newArray = []
    		for(let i = 0; i < list.length; i++){
	    		let element = list[i]
	    		let index = i
	    		let array = list
	    		newArray.push(iteratee.call(context, element, index, array));
	    	}
	    	return newArray;	
		},
	reduce: function(list, iteratee, memo = undefined, context = window){
			if (memo === undefined){
				memo = list[0] 
				for(let i = 1; i < list.length; i++){
	    		let element = list[i]
	    		let index = i
	    		let array = list
	    		memo = iteratee.call(context, memo, element);
				// return memo
				}
			}		
				else {
					for(let i = 0; i < list.length; i++){
		    		let element = list[i]
		    		let index = i
		    		let array = list
		    		memo = iteratee.call(context, memo, element);
					// return memo
					}
	    		}	
	    	return memo;	
		},
		find: function(list, predicate, context = window) {
				for (let i = 0; i < list.length; i++) {
		    		let element = list[i]
		    		let index = i
		    		let array = list
					if (predicate.call(context, list[i])) {
						return list[i]
					} 
				};
		},
		filter: function(list, predicate, context = window) {
				let arr = []
				for (let i = 0; i < list.length; i++) {
		    		let element = list[i]
		    		let index = i
		    		let array = list
					if (predicate.call(context, list[i])) {
						 arr.push(list[i])
					} 
				};
				return arr
		},
		sortBy: function(list, iteratee, context = window) {
				if (typeof iteratee === 'function'){
					return list.sort(function(a, b) {
						return iteratee(a) - iteratee(b)
						})
				}
				else
				{return list.sort(function(a,b) {
						if (a.name < b.name){
							return -1;
						}
						else if (a.name > b.name){
							return 1;
						}
						else{
							return 0;
						}
					})
				}

		},
		size: function(list) {
			let size = 0
			if (typeof list === "object") {
				return Object.keys(list).length
			}
			else {
				for (let i = 0; i < list.length; i++) {
					size++
				};
			}
			return size
		},
		first: function(list, n = 1) {
			let finalArray = []
			for(let i = 0; i < n; i++){
				finalArray.push(list[i])
			}
			return finalArray

		},
		last: function(list, n = undefined) {
			if (n === undefined) {
				n = list.length - 1
			}
			else {
				n = list.length - n
			}
			return list.slice(n)			
		},		
		compact: function(array) {
			newArray = []
			for(let i = 0; i < array.length; i++){
				if (array[i]){
					newArray.push(array[i])
				}
			}
			return newArray
		},
		// flatten: function() {

		// },
		uniq: function(array) {
			return array.sort(function(a, b){

			})
		},
		// BONUS FUNCTION
		bind: function() {

		},
		// 
		keys: function(object){
			let array = []
			for(key in object) {
				array.push(key)
			}
			return array
		},
		values: function(object){
			let array = []
			for(key in object) {
				array.push(object[key])
			};
			return array
		},
		functions: function(fi){
			let array = Object.keys(fi)
			return array.sort()
		},

	}
})()

// fi.libraryMethod()

