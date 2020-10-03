import React from 'react'
import './Animation.scss'
import $ from 'jquery'

function Animation() {
var $cursor;
var $panda;
var $pandaEars;
var $pandaEarLeft;
var $pandaEarRight;
var $pandaMouth;
var $window;

/**
 *
 */
function repositionPanda () {
  // @todo Reset body parts
  
  // Get window height - panda height
  var marginTop = parseInt($window.height() - $panda.height(), 10);
  // Add the difference to the margin top of the panda
  // $panda.css('margin-top', marginTop + 'px');
  
  // Panda Ears Top
  var pandaEarsCSSTop = parseInt($pandaEars.css('top').replace('px', ''), 10);
  $pandaEars.data('top-original', pandaEarsCSSTop);
  $pandaEars.data('top-from-window', (marginTop + pandaEarsCSSTop));
  
  // Panda Ears Width
  var pandaEarsCSSWidth = parseInt($pandaEars.css('width').replace('px', ''), 10);
  $pandaEars.data('width-original', pandaEarsCSSWidth);
  
  // Panda Mouth Left
  var pandaMouthCSSLeft = parseInt($pandaMouth.css('left').replace('px', ''), 10);
  $pandaMouth.data('left-original', pandaMouthCSSLeft);
  var pandaMouthCSSTop = parseInt($pandaMouth.css('top').replace('px', ''), 10);
  $pandaMouth.data('top-original', pandaMouthCSSTop);
  $pandaMouth.data('top-from-window', marginTop + pandaMouthCSSTop);
}

/**
 *
 */
function mouseMoveEvent (event) {
  moveCursor(event);
  adjustPandaEars(event);
  adjustPandaMouth(event);
}

/**
 *
 */
function moveCursor (event) {
  var left = event.pageX + ($cursor.width() / 2);
  var top = event.pageY + ($cursor.height() / 2);
  $cursor.css('left', left + 'px');
  $cursor.css('top', top + 'px');
}

/**
 *
 */
function adjustPandaEars (event) {
  // Horizontal Adjustment
  var earHorizontalDifference = 200;
  var earWidthOriginal = $pandaEars.data('width-original');
  var middleOfPage = $window.width() / 2;
  var widthMultiplier = 10;
  
  // Test if the cursor is on the left side
  if (event.pageX < middleOfPage) {
    var leftTrigger = middleOfPage - earHorizontalDifference;
    if (event.pageX >= leftTrigger) {
      widthMultiplier = (1 - ((event.pageX - leftTrigger) / earHorizontalDifference)) * widthMultiplier;
    }
    
    $pandaEarLeft.css('height', (earWidthOriginal - widthMultiplier) + 'px');
    $pandaEarLeft.css('width', (earWidthOriginal - widthMultiplier) + 'px');
    
    $pandaEarRight.css('height', (earWidthOriginal + widthMultiplier) + 'px');
    $pandaEarRight.css('width', (earWidthOriginal + widthMultiplier) + 'px');
  }
  
  // Cursor is on the right side
  else {
    var rightTrigger = middleOfPage + earHorizontalDifference;
    if (event.pageX <= rightTrigger) {
      widthMultiplier = (1 - ((rightTrigger - event.pageX) / earHorizontalDifference)) * widthMultiplier;
    }
    
    $pandaEarLeft.css('height', (earWidthOriginal + widthMultiplier) + 'px');
    $pandaEarLeft.css('width', (earWidthOriginal + widthMultiplier) + 'px');
    
    $pandaEarRight.css('height', (earWidthOriginal - widthMultiplier) + 'px');
    $pandaEarRight.css('width', (earWidthOriginal - widthMultiplier) + 'px');
  }
  
  // Vertical Adjustment
  var earHeight = parseInt($pandaEars.height(), 10);
  var earTop = parseInt($pandaEars.data('top-from-window'), 10);
  var middleOfEars = earTop + (earHeight / 2);
  
  var earTopOriginal = parseInt($pandaEars.data('top-original'), 10);
  var earTopDifference = 200;
  var topMultiplier = 20;
  
  if (event.pageY < middleOfEars) {
    var highestTrigger = middleOfEars - earTopDifference;
    if (event.pageY >= highestTrigger) {
      topMultiplier = (1 - ((event.pageY - highestTrigger) / earTopDifference)) * topMultiplier;
    }
    
    $pandaEars.css('top', (earTopOriginal + topMultiplier) + 'px');
  }
  
  else {
    var lowestTrigger = middleOfEars + earTopDifference;
    if (event.pageY <= lowestTrigger) {
      topMultiplier = (1 - ((lowestTrigger - event.pageY) / earTopDifference)) * topMultiplier;
    }
    
    $pandaEars.css('top', (earTopOriginal - topMultiplier) + 'px');
  }
}

/**
 *
 */
function adjustPandaMouth (event) {
  // Horizontal Adjustment
  var leftMultiplier = 30;
  var middleOfPage = $window.width() / 2;
  var mouthHorizontalDifference = 200;
  var mouthLeftOriginal = $pandaMouth.data('left-original');
  
  if (event.pageX < middleOfPage) {
    var leftTrigger = middleOfPage - mouthHorizontalDifference;
    if (event.pageX >= leftTrigger) {
      leftMultiplier = (1 - ((event.pageX - leftTrigger) / mouthHorizontalDifference)) * leftMultiplier;
    }

    $pandaMouth.css('left', (mouthLeftOriginal - leftMultiplier) + 'px');
  }
  
  else {
    var rightTrigger = middleOfPage + mouthHorizontalDifference;
    if (event.pageX <= rightTrigger) {
      leftMultiplier = (1 - ((rightTrigger - event.pageX) / mouthHorizontalDifference)) * leftMultiplier;
    }
    
    $pandaMouth.css('left', (mouthLeftOriginal + leftMultiplier) + 'px');
  }
  
  // Vertical Adjustment
  var topMultiplier = 20;
  var mouthVerticalDifference = 200;
  var mouthTop = $pandaMouth.data('top-original');
  var mouthTopFromWindow = $pandaMouth.data('top-from-window');
  
  if (event.pageY < mouthTopFromWindow) {
    var topTrigger = mouthTopFromWindow - mouthVerticalDifference;
    if (event.pageY >= topTrigger) {
      topMultiplier = (1 - ((event.pageY - topTrigger) / mouthVerticalDifference)) * topMultiplier;
    }
    
    $pandaMouth.css('top', (mouthTop - topMultiplier) + 'px');
  }
  
  else {
    var lowestTrigger = mouthTopFromWindow + mouthHorizontalDifference;
    if (event.pageY <= lowestTrigger) {
      topMultiplier = (1 - ((lowestTrigger - event.pageY) / mouthVerticalDifference)) * topMultiplier;
    }
    
    $pandaMouth.css('top', (mouthTop + topMultiplier) + 'px');
  }
}

$(function () {
  // Cursor
  $cursor = $('.cursor');
  
  // Panda
  $panda = $('.panda');
  
  // Ears
  $pandaEars = $('.panda__ear');
  $pandaEarLeft = $('.panda__ear--left');
  $pandaEarRight = $('.panda__ear--right');

  // Mouth
  $pandaMouth = $('.panda-mouth');
  
  // Window
  $window = $(window);
  
  // Reposition the panda
  repositionPanda();
  $window.resize(repositionPanda);
  
  // Capture the mouse movement
  $window.on('mousemove', mouseMoveEvent);
});
  return (
    <div className="panda">
      <div className="cursor"></div>
  <div className="panda__body"></div>
  <div className="panda__ear panda__ear--left"></div>
  <div className="panda__ear panda__ear--right"></div>
  <div className="panda-mouth">
    <div className="panda-mouth__eyes panda-mouth__eyes--left"></div>
    <div className="panda-mouth__eyes panda-mouth__eyes--right"></div>
    <div className="panda-mouth__nose"></div>
    <div className="panda-mouth__highlight"></div>
    <div className="panda-mouth__lips"></div>
  </div>
</div>
  )
}

// function Animation() {
//   var limit = document.getElementById('limit')
//   if(limit && document.getElementsByClassName('eye-left-eye')){  
//       var face  = document.getElementById('face'),
//       nose  = document.getElementById('nose'),
//       ears  = document.querySelectorAll('.ear');
//     var mouse = {x:0, y:0},
//       center = {
//           x: window.innerWidth/2, 
//           y: window.innerHeight/2
//       },
//       limit = {
//           left: - (limit.offsetWidth  - face.offsetWidth)  / 2,
//           right:  (limit.offsetWidth  - face.offsetWidth)  / 2,
//           top:  - (limit.offsetHeight - face.offsetHeight) / 2,
//           bottom: (limit.offsetHeight - face.offsetHeight) / 2,
//       },
//       eyeSize = 20,
//       eyeSizeRate = 12,
//       noseMoveRate = 2.5,
//       earMoveRate = 3.5,
//       faceMoveRate = 10;
  
//   function translate (selector, x, y) {
//       selector.style.transform = 
//           'translate(' + x + 'px,' + y + 'px)';
//   }
  
//   function interact (e) {
//       mouse.x = e.touches ? e.touches[0].clientX : e.clientX;
//       mouse.y = e.touches ? e.touches[0].clientY : e.clientY;
      
//       var dx = (mouse.x - center.x)/faceMoveRate,
//           dy = (mouse.y - center.y)/faceMoveRate,
//           classX = dx < 0 ? 'left' : 'right';
      
//       dx = dx < limit.left ? limit.left :
//            dx > limit.right ? limit.right : dx;
      
//       dy = dy < limit.top ? limit.top :
//            dy > limit.bottom ? limit.bottom : dy;
          
//       var eye = document.getElementsByClassName('eye-'+classX+'-eye')[0],
//           size = Math.round(eyeSize - Math.abs(dx)/eyeSizeRate),
//           margin = Math.round((eyeSize - size)/2);
//       if(eye) {
  
//         eye.style.cssText = 'width:' + size + 'px; \
//                              height:' + size + 'px; \
//                              margin-left:' + margin +'px; \
//                              margin-top: ' + margin +'px;'; 
//       }
      
//       // fish.style.cssText = 
//       //     'left:' + mouse.x + 'px; \
//       //      top:' + mouse.y + 'px;'
  
//       translate(face, dx, dy);
  
//       for (var i = 0; i < ears.length; i++) {
//           translate(ears[i], -dx/earMoveRate, -dy/earMoveRate);
//       }
      
//       translate(nose, dx/noseMoveRate, dy/noseMoveRate);
//   }
  
//   document.addEventListener("mousemove", interact);
//   document.addEventListener("touchmove", interact);
//   document.addEventListener("resize", function () {
//       center.x = document.innerWidth/2;
//       center.y = document.innerHeight/2;
//   });}
//   return (
//     <div className='parent-contain'>
//     <section className='student-dash-bear-container'>
//       <div className='ears-container'>
//         <div className='ear'></div>
//         <div className='ear'></div>
//       </div>
//       <div id='limit'>
//         <div id='face'>
//           <div className='eyes-container'>
//             <div className='eye-left-eye'></div>
//             <div className='eye-right-eye'></div>
//           </div>
//             <div className='phiz-container'>
//               <div id='nose'>
//                 <div className='dot'></div>
//               </div>
//                 <div className='mouth'></div>
//             </div>
//         </div>
//       </div>
//     </section>
//     </div>
//   )
// }

export default Animation