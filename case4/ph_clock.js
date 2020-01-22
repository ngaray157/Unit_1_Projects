"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Nicole Garay
   Date:  1/21/20

   Filename:   ph_clock.js     

*/

//Global Variables
var minsLeft = 30; //used to track the number of minutes left to submit order
var secsLeft = 15; //used to track the number of seconds left to submit order
var timeLeft = minsLeft * 60 + secsLeft; //stores the number of seconds left to submit a ticket order
var clockID = setInterval("countdown()", 1000); //this makes the number decrease by 1 second 1000ms = 1s


function countdown(){
   minsLeft = Math.floor(timeLeft / 60);
   secsLeft = timeLeft - 60 * minsLeft;
   var minsString = addLeadingZero(minsLeft);
   var secsString = addLeadingZero(secsLeft);
   document.getElementById("minutes").innerHTML = minsString;
   document.getElementById("seconds").innerHTML = secsString;
   checkTimer(); //this makes the countdown() function check the timer and if it = 0, the clock stops
   timeLeft--; //this decreases the time left by one each second
}

//this function stops the clock once the time to submit the order has run out
function stopClock(){
   document.getElementById("TimeHead").insertAdjacentHTML('beforeEnd', "<br />");
   clockID = clearInterval(clockID);
}


/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */
   
function checkTimer() {
   if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}
