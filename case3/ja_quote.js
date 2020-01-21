"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 3

   Random Jane Austen Quote Generator
   Author: Nicole Garay
   Date:   1/16/20
   
   This script randomly generates a Jane Austen quote from
   a list of 10 quotes and writes that quote into the first
   quotation tag in the Web page.

*/

//generates a random number from 0 to 9, which decides which quote is chosen and put into the HTML
var randomQ = randomInt(0,10);
function randomInt(lowest, size){
   var randy = Math.floor(Math.random() * size + lowest);
   return randy;
}
//gets the first quote from the string, it goes from 0 to 9
var quoteElem = document.getElementsByTagName("quote")[0];

//displays the quotes in the HTML
quoteElem.innerHTML = getQuote(randomQ);

function getQuote(n) {
   var quotes = [
   "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
   "I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.",
   "Silly things do cease to be silly if they are done by sensible people in an impudent way.",
   "Give a girl an education and introduce her properly into the world, and ten to one but she has the means of settling well, without further expense to anybody.",
   "Life seems but a quick succession of busy nothings.",
   "Our scars make us know that our past was for real.",
   "I cannot speak well enough to be unintelligible.",
   "One cannot be always laughing at a man without now and then stumbling on something witty.",
   "Men were put into the world to teach women the law of compromise.",
   "The person, be it gentlemen or lady, who has not pleasure in a good novel, must be intolerably stupid."
   ];
   
   return quotes[n];
}