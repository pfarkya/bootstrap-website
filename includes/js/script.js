/*

My Custom JS
============

Author:  Prashant Farkya
Updated: July 2016
Notes:	 Hand coded for Assignment in Stack Route

*/

// var header,ypos;
// window.addeventListener('scroll',function() {
// 	var topbrand=document.getElementByClassName('');
// 	var ypos= window.pageYOffset;
// 	if(ypos>300){
// 	}	

// 	// body...
// });

$(window).on("scroll touchmove", function () {
  $('.shrink').toggleClass('tiny', $(document).scrollTop() > 300);
});