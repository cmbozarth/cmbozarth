/*Nav*/
  $(document).ready(function(){
  $('#navToggle').click(function(){
    $(this).toggleClass('open');
    $('#full_nav').toggleClass('full_nav_open');
  });
  $('#full_nav').click(function(){
    $(this).toggleClass('full_nav_open');
    $('#navToggle').toggleClass('open');
  });
});

/*Site background*/
let squareContain = document.getElementById("squareContain");

function canAdd() {
  let square = squareContain.children[0],
    cWidth = squareContain.offsetWidth,
    cHeight = squareContain.offsetHeight,
    sWidth = square.offsetWidth,
    sHeight = square.offsetHeight;

  return Math.floor(cWidth / sWidth) * Math.floor(cHeight / sHeight);
}

function multiplyNode(node, count, deep) {
  if (squareContain.children.length == count)
    return;

  if (squareContain.children.length < count) {
    for (var i = 0, copy; i < count - 1; i++) {
      copy = node.cloneNode(deep);
      node.parentNode.insertBefore(copy, node);
    }
  } else {
    while (squareContain.children.length > count) {
      squareContain.removeChild(squareContain.children[squareContain.children.length - 1]);
    }
  }
}

$(window).on("resize", function() {
  multiplyNode(squareContain.querySelector('.square'), canAdd(), false);
  $(document).on("webkitAnimationEnd mozAnimationEnd animationend", ".square", function() {
    $(this).removeClass("squareAnim");
  });
  $(document).on("mouseenter", ".square", function() {
    $(this).addClass("squareAnim");
  });
}).resize();

/*Fade up element when in position*/
  var scroll = window.requestAnimationFrame ||
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

loop();

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

/*About square parallax*/
/*var starsOne = document.querySelector("#starsOne");
var starsTwo = document.querySelector("#starsTwo");
 
function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}
 
var xScrollPosition;
var yScrollPosition;
 
function scrollLoop() {
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;
 
    setTranslate(0, yScrollPosition * -0.6, starsOne);
    setTranslate(0, yScrollPosition * -0.3, starsTwo);
 
    requestAnimationFrame(scrollLoop);
}*/

  var starCount = 25;
  let starClass = document.querySelectorAll('star');
  let starContain = document.getElementById('starContain');
  let starContainWidth = starContain.offsetWidth;
  let starContainHeight = starContain.offsetHeight;

  var starColor = ['rgba(150,0,50,.3)', 'rgba(50,0,150,.4)', 'rgba(255,255,255,.2)'];
  var starSizeMin = 5;
  var starSizeMax = 25;

  let starScrollMin = 2;
  let starScrollMax = 10;
  /*Create star divs*/
  for(var i=0; i < starCount; i++){
    var starDiv = document.createElement("div");
    starDiv.className = 'star';
    starContain.append(starDiv);
  }

  /*Make an array from the star divs*/
  var starDivvy = document.querySelectorAll(".star");
  var starDivvyArr = Array.from(starDivvy);

  /*Give the star array some different styles*/
  for(i = 0; i < starDivvyArr.length; i++){
    /*Change star color*/
    starDivvyArr[i].style.backgroundColor = starColor[Math.floor(Math.random() * starColor.length)];
    /*Change star position within container*/
    starDivvyArr[i].style.left = Math.floor((Math.random() * starContainWidth) + 1) + "px";
    starDivvyArr[i].style.top = Math.floor((Math.random() * starContainHeight) + 1) + "px";
    /*Change star size*/
    starDivvyArr[i].style.width = Math.floor(Math.random() * (starSizeMax - starSizeMin + 1)) + starSizeMin + "px";
    starDivvyArr[i].style.height = starDivvyArr[i].style.width;
    starDivvyArr[i].starScrollSpeed = -Math.abs((Math.floor(Math.random() * (starScrollMax - starScrollMin + 1)) + starScrollMin) / 10);
}

 function starScroll() {
    for (i = 0; i < starDivvyArr.length; i++) { 
    yScrollPos = window.scrollY;
    starDivvyArr[i].style.transform = "translate3d(" + 0 + "px, " + yScrollPos * starDivvyArr[i].starScrollSpeed + "px, 0)"; 
    }
    requestAnimationFrame(starScroll);
    }
window.addEventListener("load", starScroll, false);

/*Portfolio parallax hover effect*/
var paraUno = document.getElementById('uno_para_contain');
	var parallaxInstance = new Parallax(paraUno, {
		hoverOnly : true,
		relativeInput : true
	});
	var paraDos = document.getElementById('dos_para_contain');
	var parallaxInstance = new Parallax(paraDos, {
		hoverOnly : true,
		relativeInput : true
	});
	var paraTres = document.getElementById('tres_para_contain');
	var parallaxInstance = new Parallax(paraTres, {
		hoverOnly : true,
		relativeInput : true
	});

	var paraCinco = document.getElementById('cuatro_para_contain');
	var parallaxInstance = new Parallax(paraCinco, {
		hoverOnly : true,
		relativeInput : true
	});
	var paraSeis = document.getElementById('cinco_para_contain');
	var parallaxInstance = new Parallax(paraSeis, {
		hoverOnly : true,
		relativeInput : true
	});

/*?*/