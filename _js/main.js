//------------------------animation---------------------------------

var list = ["Traveling", "Black Coffee", "Cooking", "Studio Ghibli","Doctor Who","Getting Crafty","Killer Whales", "Bicycling", "Coloring Books","Life Music","Rock Climbing", "To Dislike Politics", "Generative Art", "Game of Thrones", "Ayn Rand", "99% Invisible" ];
console.log("runing");
var lastNumber = 0;
 // $('.overlay').hide();

var interestInterval = setInterval(function(){
	var position = Math.floor(Math.random()*list.length);
	while(lastNumber == position){
		position = Math.floor(Math.random()*list.length)
	}
	// console.log(position);
	lastNumber = position;	

	$("#list").html( list[position]);

}, 3000);

$("#list").on('click', function() {
	// on click, clear the interval so that it doesn't restart
	clearInterval(interestInterval);

	//get a new random position
	var position = Math.floor(Math.random()*list.length);
	while(lastNumber == position){
		position = Math.floor(Math.random()*list.length)
	}
	// console.log(position);
	lastNumber = position;

	$("#list").html( list[position]);

	// set the interval again so that it keeps updating
	interestInterval = setInterval(function(){
		var position = Math.floor(Math.random()*list.length);
		while(lastNumber == position){
			position = Math.floor(Math.random()*list.length)
		}
		// console.log(position);
		lastNumber = position;

		$("#list").html( list[position]);

	}, 3000);
});

//------------------------ANIMATION END---------------------------------

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


$('#arrow-down').click(function() {
    $('html, body').animate({
        scrollTop: $('#blinkBlink').offset().top
    }, 2000);
});

$('#work').click(function() {
	$('html,body').animate({
		scrollTop: $('#blinkBlink').offset().top
	},1000);
});

// ------------------------scrollfunction--------------------

$('#scrollLeft, #scrollRight').click(function(){
	// css on the element: transition: all 2s ease-in;
	// change css, css transition takes over
	var xPos = document.getElementsByClassName("slider_wrapper-md")[0].style.left;
	xPos = xPos.split("p")[0]; // string is "110px" so split on "p" and take first part
	xPos = Number(xPos); // convert string to a number 

	var scrollAmout = 700;

	var id =  $(this).attr('id');
	if(id == "scrollLeft"){
		xPos += scrollAmout;
	} else {
		xPos -= scrollAmout;
	}

	xPos = Math.min(xPos, 0); //limit the scroll to the left and right of the wrapper
	xPos = Math.max(xPos, -1940);
	$(".slider_wrapper-md").css("left", xPos);
	console.log(xPos);
});

/*
var xPos = 0;
var scrollInterval;
	
$('#scrollLeft, #scrollRight').mouseenter(function(){
	// console.log("on it");

	var id = $(this).attr('id');
	console.log(this);

	scrollInterval = setInterval(function(){
		if(id == "scrollLeft"){
			xPos -= 2;
		} else {
			xPos += 2;
		}
		// console.log(xPos);
		if(xPos < 0){
			xPos = 0;
		}
		if(xPos > 1680){
			xPos = 1680;
		}
		$(".slider_wrapper-md").css("transform", "translate("+(-xPos)+"px, 0px)");
		// $(".slider_wrapper-md").css("left", -xPos+"px");
		// console.log(xPos + "px");
	}, 10);
});

$("#scrollRight, #scrollLeft").mouseleave(function(){
		clearInterval(scrollInterval);
});
*/
 // Scroll Event 

