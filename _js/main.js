//------------------------animation---------------------------------

var list = ["Traveling To Far Places", "Black Coffee", "Cooking", "Studio Ghibli","Doctor Who","Getting Crafty","Killer Whales","Bicycling","Coloring Books","Life Music","Rock Climbing", "To Dislike Politics", "Generative Art" ];
console.log("runing");
var lastNumber = 0;
 // $('.overlay').hide();

setInterval(function(){
	var position = Math.round(Math.random()*list.length);
	while(lastNumber == position){
		position = Math.round(Math.random()*list.length)
	}
	// console.log(position);
	lastNumber = position;

	$("#list").html( list[position]);

}, 3000);
//------------------------ANIMATION END---------------------------------
// $(this).on("click", function(){
// 	console.log(this);
// });

$('#about').click(function() {
    $('html, body').animate({
        scrollTop: $('#aboutMe').offset().top
    }, 2000);
});

$('#work').click(function() {
	$('html,body').animate({
		scrollTop: $('#blinkBlink').offset().top
	},1000);
});
// ------------------------scrollfunction--------------------

var xPos = 0;
var scrollInterval;
	
$('#scrollLeft, #scrollRight').click(function(){
	// console.log("on it");

	var id = $(this).attr('id');
	console.log(this);

	// scrollInterval = setInterval(function(){
		if(id == "scrollLeft"){
			xPos -= 950;
		} else {
			xPos += 950;
		}
		// console.log(xPos);
		if(xPos < 0){
			xPos = 0;
		}
		if(xPos > 3800){
			xPos = 3800;
		}
		// $(".slider_wrapper").css("transform", "translate("+(-xPos)+"px, 0px)");
		$(".slider_wrapper").css("left", -xPos+"px");
		// console.log(xPos + "px");
	// }, 10);
});

	$("#scrollRight, #scrollLeft").mouseleave(function(){

		clearInterval(scrollInterval);
		//$("container").css("transform","translate(0px,0px)");
	});
// });

