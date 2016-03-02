//------------------------animation---------------------------------

var list = ["Animation", "Traveling", "Black Coffee", "Cooking", "Animation","Traveling","Black Coffee","Cooking","Doctor Who","Design","Getting Crafty","Settlers of Catan","Killer Whales","Bicycling","Coloring Books","Listening to Music","Rock Climbing" ];
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

// $(this).on("click", function(){
// 	console.log(this);
// });

$('.span_1_of_3').hover(function(){
    // $(this).children('.overlay').css({"bottom":"0px"});
    console.log('this sucks');

    $(this).find('h2').css({"top":"18px", "color":"black"});
    // change placement -100px & color white
    // & in css!!!! transition placement 
    $(this).find('.cover').css({"opacity":"0.5"});
    $(this).children('.overlay').css({"bottom":"0px"}); 

}, function(){
	// & change it back
	$(this).find('h2').css({"top":"-40px","color":"white"});
    $(this).children('.overlay').css({"bottom":"-200px"});
    $(this).find('.cover').css({"opacity":"1"});
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

