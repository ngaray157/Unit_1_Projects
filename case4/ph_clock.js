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
var minsLeft = 0; //used to track the number of minutes left to submit order
var secsLeft = 15; //used to track the number of seconds left to submit order
var timeLeft = minsLeft * 60 + secsLeft; //stores the number of seconds left to submit a ticket order

checkTimer();
function countdown(){
   minsLeft = timeLeft / 60 + Math.floor();
   secsLeft = timeLeft - 60 * minsLeft;
   var minsString = numStr;
   var secsString = addLeadingZero(secsLeft);
   document.getElementById("minutes").innerHTML = minsString;
   document.getElementById("seconds").innerHTML = secsString;
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
