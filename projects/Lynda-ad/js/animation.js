"use strict";
window.onload = function() {
	frameOne();
	$("#img1", 0, {  delay: 0, opacity: 0 });
	$("#copy1", 0, {  delay: 0, top:58.26, opacity: 0 });
	$("#copy2", 0, {  delay: 0, top:237, opacity: 0 });
	$("#copy3", 0, {  delay: 0, top:68, opacity: 0 });
	$("#img2", 0, {  delay: 0, opacity: 0 });
	$("#copy4", 0, {  delay: 0, top:76, opacity: 0 });
	$("#cta", 0, {  delay: 0, top:202, opacity: 0 });
	


};
function frameOne() {
	$("#img1", 1, { delay:0.2, top:0, opacity:1, ease: "easeOutSine" });
	$("#copy1", 1, { delay:0.8, top:48.26, opacity:1, ease: "easeOutSine" });
	$("#copy2", 0, { delay:0.3, top:207.732, opacity:1, ease: "easeOutSine" });
	
	setTimeout(frameTwo, 3000);

}

function frameTwo() {
	$("#copy1", 0.3, { delay:0, top:11.175, opacity:0, ease: "easeOutSine" });
	$("#copy3", 0.3, { delay:0.7, top:48.94, opacity:1, ease: "easeOutSine" });
	
		setTimeout(frameThree, 3000);
}

function frameThree() {	
	$("#img1", 0, { delay:0.3, top:0, opacity:0, ease: "easeOutSine" });
	$("#copy2", 0, { delay:0.3, top:207.732, opacity:0, ease: "easeOutSine" });
	$("#copy3", 0, { delay:0.3, top:48.94, opacity:0, ease: "easeOutSine" });
	$("#img2", 0, { delay:0.3, top:0, opacity:1, ease: "easeOutSine" });
	$("#copy4", 0.3, { delay:0.7, top:46.721, opacity:1, ease: "easeOutSine" });
	$("#cta", 0.5, { delay:1.3, top:182.5, opacity:1, ease: "easeOutSine" });
	setTimeout(frameFour, 4000);

} 
