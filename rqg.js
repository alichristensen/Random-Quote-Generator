var quotes = ["quote 1", "quote 2", "quote 3", "quote 4", "quote 5"]; 

var h3 = document.querySelector("h3"); 
var button = document.querySelector("button"); 

function randomInt() { 
	var max = 5;
	var min = 1;
	return Math.floor(Math.random() * (max - min +1)) + min;
}

var previous; 

function generator() {
	var num = randomInt() -1; 
	if (previous !== num) {
		h3.textContent = quotes[num]; 
	}
	else {
		h3.textContent = quotes[(num +1)%5]; 
	}
	previous = num;
}

button.addEventListener("click", function() {
	generator();
});