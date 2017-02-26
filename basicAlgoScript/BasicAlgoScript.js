function reverseString(str) {
  var newStr = str[str.length-1];
  for(var i = str.length-2; i >= 0; i--){
    newStr += str[i];
  }
  return newStr;
}

reverseString("hello");

/*-------------------------------------------*/

function factorialize(num) {
  if(num === 0) return 1;
  for(var i = num-1; i > 0; i--){
    num *= i;
  }
  return num;
}

factorialize(5);

/*-------------------------------------------*/

function palindrome(str) {
  var expression = /[a-z0-9]/g;
  var characters = str.toLowerCase().match(expression);

  for(var i = 0; i < [characters.length/2]; i++)
  {
  	if(characters[i] != characters[characters.length-i-1])
  		return false;
  }
  return true;
}

palindrome("eye");

/*-------------------------------------------*/
function findLongestWord(str) {
	var words = str.split(' ');
	lengthOfWords = words.map(function(val){
		return val.length;
	});
	return findMax(lengthOfWords);
}

function findMax(arr) {
	var max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(arr[i] > max)
			max = arr[i];
	}
	console.log(max);
	return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

/*-------------------------------------------*/
function titleCase(str) {
	var words = str.split(' ');
	var newWords = words.map(function(val) {
		var firChar = val[0].toUpperCase();
		val = val.slice(1, val.length).toLowerCase();
		result = firChar.concat(val);
		console.log(result);
		return result;
	});

  return newWords.join(' ');
}

titleCase("I'm a little tea pot");

/*-------------------------------------------*/
function findMax(arr) {
	var max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(arr[i] > max)
			max = arr[i];
	}
	return max;
}

function largestOfFour(arr) {
  for (var i = 0; i < arr.length; i++) {
  	arr[i] = findMax(arr[i]);
  }
  console.log(arr);
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*-------------------------------------------*/

function confirmEnding(str, target) {
	var words = str.split(' ');
	if(words.length == 1)
	{ 
		if(str.substr(str.length-1,1) === target) return true;
	}
	else 
	{
		var lastWord = words[words.length - 1];
		for (var i = 1; i <= target.length; i++) {
			if(target[target.length - i] !== lastWord[lastWord.length - i]){
				return false;
			}
		}
		return true;
	}
	return false;
}

confirmEnding("Bastian", "n");

/*-------------------------------------------*/

function repeatStringNumTimes(str, num) {
  if(num <= 0) return '';
  var newStr = str;
  for (var i = 0; i < num-1; i++) {
  	newStr = newStr.concat(str);
  }
  return newStr;
}

repeatStringNumTimes("c", 3);

/*-------------------------------------------*/
function truncateString(str, num) {
	var newStr;
    if(str.length <= num){
      return str;
    }
	else if(num <= 3) {
		newStr = str.slice(0,num);
        newStr += '...';
	}
	else {
		newStr = str.slice(0, num - 3);
		newStr += '...';
	}
	console.log(newStr);
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

/*-------------------------------------------*/

function chunkArrayInGroups(arr, size) {
  var times = Math.ceil(arr.length/size);
  var result = [];
  for (var i = 0; i < times; i++) {
  	result.push(arr.slice(i*size, (i+1)*size));
  }
  return result;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

/*-------------------------------------------*/

function slasher(arr, howMany) {
	if(howMany >= arr.length) return [];
	arr.splice(0, howMany);
  return arr;
}


slasher([1, 2, 3], 2);

/*-------------------------------------------*/
function mutation(arr) {
	for(var i = 0; i < arr[1].length; i++) {
		var word = arr[0].toLowerCase();
		var chara = arr[1][i].toLowerCase();
		if(word.indexOf(chara) < 0) {
			console.log(word.indexOf(chara));
			return false;
        }
	}
  return true;
}

mutation(["hello", "hey"]);

/*-------------------------------------------*/

function bouncer(arr) {
  arr = arr.filter(function(val) {
    if(val) return val;
  });
  return arr;
}

bouncer([7, "ate", "", false, 9]);

/*-------------------------------------------*/

function destroyer() {
  var oldArr = arguments[0];
  var target = [];
  for(var i = 1; i < arguments.length; i++) {
  	target.push(arguments[i]);
  }
  oldArr = oldArr.filter(function(val) {
  	var notExist = true;
  	for(var i = 0; i < target.length; i++) {
  		if(val === target[i]) {
  			console.log('false');
  			notExist = false;
  		}
  	}
  	if(notExist) {
	    return val;
	  }
  });
  return oldArr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/*-------------------------------------------*/

function getIndexToIns(arr, num) {
	arr.sort(function(a, b) {
		return a-b;
	});
	for(var i = 0; i < arr.length; i++) {
		if(num <= arr[i])
			return i;
	}
  return arr.length;
}

getIndexToIns([40, 60], 50);

/*-------------------------------------------*/
function rot13(str) {
	var newStr = ' ';
  for(var i = 0; i < str.length; i++) {
  	var charCode = str.charCodeAt(i);
  	if(charCode >= 65 && charCode <= 77) {
  		newStr += (String.fromCharCode(charCode + 13));
  	}else if(charCode >= 78 && charCode <= 90) {
  		newStr += (String.fromCharCode(charCode - 13));
  	}else {
  		newStr += (String.fromCharCode(charCode));
  	}
  }
  return newStr.slice(1, newStr.length);
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

/*-------------------------------------------*/
