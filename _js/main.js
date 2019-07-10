//------------------------ABOUT ME---------------------------------

var list = ["Traveling", "Black Coffee", "Snowboarding", "Studio Ghibli", "Doctor Who", "Making", "Killer Whales", "Bicycling", "Live Music", "Rock Climbing", "Computational Form", "Neal Stephenson", "Ayn Rand", "99% Invisible" ];
console.log("runing");
var lastNumber = 0;

var interestInterval = setInterval(function(){
	var position = Math.floor(Math.random()*list.length);
	while(lastNumber == position){
		position = Math.floor(Math.random()*list.length)
	}
	lastNumber = position;	
	$("#list").html( list[position]);
}, 3000);

$("#list").on('click', function() {
	clearInterval(interestInterval);
	var position = Math.floor(Math.random()*list.length);
	while(lastNumber == position){
		position = Math.floor(Math.random()*list.length)
	}
	lastNumber = position;
	$("#list").html( list[position]);
	interestInterval = setInterval(function(){
		var position = Math.floor(Math.random()*list.length);
		while(lastNumber == position){
			position = Math.floor(Math.random()*list.length)
		}
		lastNumber = position;
		$("#list").html( list[position]);
	}, 3000);
});

//------------------------HEADER MECHANICS---------------------------------

$(document).ready(function(){
	$(function(){ $("footer").load("footer.html") });
	$(function(){ $(".all_other").load("all_other.html") });

	$('#about').click(function() {
	    $('html, body').animate({
	        scrollTop: $('.about_me').offset().top
	    }, 2000);
	});

	$('#work').click(function() {
		console.log("work pressed")
		$('html, body').animate({
			// scrollTop: $(window.location.hash).offset().top;
			// window.location.href = ($(e.currentTarget).attr("href"));
			scrollTop: $('#heartfelt').offset().top
		},1000);
	});

	$('#arrow-down').click(function() {
		console.log("arrow-pressed")
	    $('html, body').animate({
	        scrollTop: $('#heartfelt').offset().top
	    }, 2000);
	}); 

	$('#home').click(function() {
		console.log("home pressed")
		window.location = "index.html";
	});      
});


// ------------------------SROLLING SCREWED--------------------

$('#scrollLeft, #scrollRight').click(function(){
	var xPos = document.getElementsByClassName("slider_wrapper-md")[0].style.left;
	xPos = xPos.split("p")[0]; 
	xPos = Number(xPos); 
	var scrollAmout = 700;
	var id =  $(this).attr('id');
	if(id == "scrollLeft"){
		xPos += scrollAmout;
	} else {
		xPos -= scrollAmout;
	}
	xPos = Math.min(xPos, 0); 
	xPos = Math.max(xPos, -1940);
	$(".slider_wrapper-md").css("left", xPos);
	console.log(xPos);
});




var didScroll;
var lastScrollTop = 0;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    console.log('st' + st);       
    if (st > lastScrollTop && st > navbarHeight){
        $('header').removeClass('folded-down').addClass('folded-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('folded-up').addClass('folder-down');
        }
    }
    lastScrollTop = st;
}


// ---------mouse animation-----------------//
var requestAF = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var cancelAF = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var rAF;

let cursor = null;
const amount = 8;
const sineDots = Math.floor(amount * 0.3);
const width = 10;
const idleTimeout = 150;
let lastFrame = 0;
const mousePosition = { x: 0, y: 0 }; 
const dots = [];
let timeoutID;
let idle = false;

class Dot {
  constructor(index = 0) {
    this.index = index;
    this.anglespeed = 0.05;
    this.x = 0;
    this.y = 0;
    this.scale = 1 - (0.05 * index);
    this.range = (width / 2) - (((width / 2) * this.scale) + 2);
    this.limit = width * 0.75 * this.scale;
    this.element = document.createElement('span');
    cursor.appendChild(this.element);
  }

  lock() {
    this.lockX = this.x;
    this.lockY = this.y;
    this.angleX = Math.PI * 2 * Math.random();
    this.angleY = Math.PI * 2 * Math.random();
  }

  draw() {
    if (!idle || this.index <= sineDots) {
      this.element.style.transform = `translateX(${this.x}px) translateY(${this.y}px) scale(${this.scale})`;
    } else {
      this.angleX += this.anglespeed;
      this.angleY += this.anglespeed;
      this.y = this.lockY + (Math.sin(this.angleY) * this.range);
      this.x = this.lockX + (Math.sin(this.angleX) * this.range);
      this.element.style.transform = `translateX(${this.x}) translateY(${this.y}) scale(${this.scale})`;
    }
  }
}

function goInactive() {
  idle = true;
  dots.forEach(dot => dot.lock());
}

function startIdleTimer() {
  timeoutID = setTimeout(goInactive, idleTimeout);
  idle = false;
}

function resetIdleTimer() {
  clearTimeout(timeoutID);
  startIdleTimer();
}

// grabs mouse position
const onMouseMove = (event) => {
  mousePosition.x = event.clientX - (width / 2);
  console.log('mouseX_' + mousePosition.x)
  mousePosition.y = event.clientY - (width / 2);
  console.log('mouseY_' + mousePosition.y)
  resetIdleTimer();
};

function buildDots() {
  cancelAF(rAF);  
  for (let i = 0; i < amount; i += 1) {
    const dot = new Dot(i);
    dots.push(dot);
  }
}

const positionCursor = (delta) => {
  let { x } = mousePosition;
  let { y } = mousePosition;
  dots.forEach((dot, index, dots) => {
    const nextDot = dots[index + 1] || dots[0];
    dot.x = x;
    dot.y = y;
    dot.draw(delta);
    if (!idle || index <= sineDots) {
      const dx = (nextDot.x - dot.x) * 0.35;
      const dy = (nextDot.y - dot.y) * 0.35;
      x += dx;
      y += dy;
    }
  });
};

const render = (timestamp) => {
  const delta = timestamp - lastFrame;
  positionCursor(delta);
  rAF = requestAnimationFrame(render);
};

function init(loop) {
  cursor = document.getElementById('cursor');
  window.addEventListener('mousemove', onMouseMove);
  lastFrame += new Date();
  buildDots();
  render();
}

rAF = requestAF(init);
// ------------------------CARUSEL------------------------------

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n){
	var i;
	var slide = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if(n > slide.length){slideIndex = 1}
	if( n < 1){slideIndex = slide.length}
	for(i=0; i < slide.length; i++){
		slide[i].style.display = 'none';
	}
	for(i=0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slide[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += " active";
}

window.onload= function(){
	console.log('Imma here!')
	showDivs(slideIndex);

}


// -------------------------Hide header on scroll down---------------








