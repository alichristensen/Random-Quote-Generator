var quotes = [
	"I once thought I had mono for an entire year. It turned out I was just really bored. -Wayne Campbell", 
	"No Stairway. Denied!- Wayne Campbell", 
	"If you're going to spew, spew into this- Garth Algar", 
	"Schwing! - Wayne Campbell", 
	"It's like a new pair of underwear, at first they're really restricive but then after a while they become a part of you - Garth Algar", 
	"Garth, marriage is punishment for shoplifting in some countries- Wayne Campbell", 
	"Hey Mr. Donut man, who's trying to kill ya? I don't know but they better not! - Garth Algar", 
	"I'm having a good time... NOT! - Garth Algar"
	]; 


var h3 = document.querySelector("h3"); 
var button = document.querySelector("button"); 

function randomInt() { 
	var max = quotes.length;
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