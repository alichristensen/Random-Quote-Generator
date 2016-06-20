var quotes = [
	"I once thought I had mono for an entire year. It turned out I was just really bored. -Wayne Campbell", 
	"No Stairway. Denied!- Wayne Campbell", 
	"If you're going to spew, spew into this- Garth Algar", 
	"Schwing! - Wayne Campbell", 
	"It's like a new pair of underwear, at first they're really restricive but then after a while they become a part of you - Garth Algar"]; 


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