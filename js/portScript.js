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



/*Image Slider*/
$(document).ready(function(){
  $('.compSlider').each(function(){
    var j = $(this);
    // Adjust the slider
    var width = j.width()+'px';
    j.find('.resize img').css('width', width);
  });
});

function drags(dragIt, resizeIt, container) {
  
  dragIt.on('mousedown touchstart', function(e) {
    
    dragIt.addClass('draggy');
    resizeIt.addClass('resizey');
    
    var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
    
    var dragWidth = dragIt.outerWidth(),
        posX = dragIt.offset().left + dragWidth - startX,
        containerOffset = container.offset().left,
        containerWidth = container.outerWidth();
 
    minLeft = containerOffset + 10;
    maxLeft = containerOffset + containerWidth - dragWidth - 10;
    
    dragIt.parents().on("mousemove touchmove", function(e) {
      
      var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
      
      leftValue = moveX + posX - dragWidth;
      
      if ( leftValue < minLeft) {
        leftValue = minLeft;
      } else if (leftValue > maxLeft) {
        leftValue = maxLeft;
      }
      
      widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
      
      $('.draggy').css('left', widthValue).on('mouseup touchend touchcancel', function () {
        $(this).removeClass('draggy');
        resizeIt.removeClass('resizey');
      });
      $('.resizey').css('width', widthValue);
    }).on('mouseup touchend touchcancel', function(){
      dragIt.removeClass('draggy');
      resizeIt.removeClass('resizey');
    });
    e.preventDefault();
  }).on('mouseup touchend touchcancel', function(e){
    dragIt.removeClass('draggy');
    resizeIt.removeClass('resizey');
  });
}

$(document).ready(function(){
  $('.compSlider').each(function(){
    var j = $(this);
    // Adjust the slider
    var width = j.width()+'px';
    j.find('.resize img').css('width', width);
    // Bind dragging events
    drags(j.find('.handle'), j.find('.resize'), j);
  });
});

$(window).resize(function(){
  $('.compSlider').each(function(){
    var j = $(this);
    var width = j.width()+'px';
    j.find('.resize img').css('width', width);
  });
});

/*MODAL*/
var modal = document.querySelector("#modal-contain");
var modalImage = document.querySelector(".modalImage");
Array.from(document.querySelectorAll(".modal-thumb")).forEach (item => {
  item.addEventListener("click", event => {
    modal.style.display = "block";
    modalImage.src = event.target.src;
  });
});
document.querySelector("#modal-contain").addEventListener("click", () => {
  modal.style.display = "none";
});



/*?*/