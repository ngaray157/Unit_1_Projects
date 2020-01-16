"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Nicole Garay
   Date:   1/16/20

*/
//displays date we know on HTML page such as 2/3/2018
var thisTime = new Date("February 3, 2018 3:15:28");
var timeStr = thisTime.toLocaleString(); //LocaleString displays the date we know like 2/3/2018
document.getElementById("timeStamp").innerHTML = timeStr; //displays the date on the HTML page

//displays hour and month
var thisHour = thisTime.getHours(); 
var thisMonth = thisTime.getMonth();

//finds the year and hour in the sky to add the correct picture
var mapNum = (2 * thisMonth + thisHour) % 24; 

//whichever number matches the picture, that picture will appear
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

//the imgStr will be added after the beginning of the planisphere element
document.getElementById("planisphere").insertAdjacentHTML('afterBegin',imgStr);