"use strict";
window.onload = function() {
	frameOne();
	$("#img1", 0, {  delay: 0, opacity: 0 });
	$("#copy1", 0, {  delay: 0, top:24, opacity: 0 });
	$("#copy2", 0, {  delay: 0, left:-25.809, top:142.003, opacity: 0 });
	$("#copy3", 0, {  delay: 0, left:-24.809, top:146.242,opacity: 0 });
	$("#img2", 0, {  delay: 0, opacity: 0 });
	$("#copy4", 0, {  delay: 0,left:-54.042,top:139.454,opacity: 0 });
	$("#img3", 0, {  delay: 0, opacity: 0 });
	$("#copy5", 0, {  delay: 0,left:0,top:0,opacity: 0 });
	$("#copy6", 0, {  delay: 0,left:-39,top:83.319,opacity: 0 });
	$("#cta", 0, {  delay: 0,left:45,top:150,opacity: 0 });


};
function frameOne() {
	$("#img1", 1, { delay:.2, top:0, opacity:1, ease: "easeOutSine" });
	$("#copy1", 1, { delay:0.9, top:11.175, opacity:1, ease: "easeOutSine" });
	$("#copy2", 1, { delay:1.5, left:25.809,top:142.003, opacity:1, ease: "easeOutSine" });
	$("#copy3", 1, { delay:2.0, left:54.294,top:146.242, opacity:1, ease: "easeOutSine" });
	setTimeout(frameTwo, 4000);

}
function frameTwo() {
	$("#img1", 0.3, { delay:0, top:0, opacity:0, ease: "easeOutSine" });
	$("#copy1", 0.3, { delay:0, top:11.175, opacity:0, ease: "easeOutSine" });
	$("#copy2", 0.3, { delay:0, left:25.809,top:142.003, opacity:0, ease: "easeOutSine" });
	$("#copy3", 0.3, { delay:0, left:54.294,top:146.242, opacity:0, ease: "easeOutSine" });
	$("#img2", 0.3, { delay:0, top:0.5, opacity:1, ease: "easeOutSine" });
	$("#copy4", 0.5, { delay:0.9, left:14.042,top:139.454, opacity:1, ease: "easeOutSine" });
	setTimeout(frameThree, 4000);

}
function frameThree() {	
	$("#img2", 0.3, { delay:0, top:0, opacity:0, ease: "easeOutSine" });
	$("#copy4", 0.5, { delay:0, left:14.042,top:139.454, opacity:0, ease: "easeOutSine" });
	$("#img3", 0.3, { delay:0.3, top:0, opacity:1, ease: "easeOutSine" });
	$("#copy5", 0.5, { delay:0.9, left:0,top:10, opacity:1, ease: "easeOutSine" });
	$("#copy6", 0.5, { delay:1.4, left:9.232,top:83.319, opacity:1, ease: "easeOutSine" });
	$("#cta", 1.4, { delay:2.0, left:45,top:140, opacity:1, ease: "easeOutSine" });
	setTimeout(frameFour, 4000);

}