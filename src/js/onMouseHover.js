import * as $ from 'jquery'

$('.moving-image-container').mousemove(function (e) {
  var containerWidth = $(this).width(),
    containerHeight = $(this).height(),
    imgWidth = $('.moving-image').width(),
    imgHeight = $('.moving-image').height(),
    padding = 50,
    relX = e.pageX - $(this).offset().left - padding,
    relY = e.pageY - $(this).offset().top - padding,
    minXPos = (imgWidth - containerWidth) * -1,
    minYPos = (imgHeight - containerHeight) * -1,
    finalX =
      (relX / ((containerWidth - padding * 2) / 100)) *
      ((imgWidth - containerWidth) / 100) *
      -1,
    finalY =
      (relY / ((containerHeight - padding * 2) / 100)) *
      ((imgHeight - containerHeight) / 100) *
      -1

  if (finalX > 0 && finalY > 0) {
    $('.moving-image').css({ left: 0, top: 0 })
  } else if (finalX < 0 && finalX > minXPos && finalY >= 0) {
    $('.moving-image').css({ left: finalX, top: 0 })
  } else if (finalX >= 0 && finalY < 0 && finalY > minYPos) {
    $('.moving-image').css({ left: 0, top: finalY })
  } else if (finalX < minXPos && finalY >= 0) {
    $('.moving-image').css({ left: minXPos, top: 0 })
  } else if (finalX < minXPos && finalY < 0 && finalY > minYPos) {
    $('.moving-image').css({ left: minXPos, top: finalY })
  } else if (finalX >= 0 && finalY < minYPos) {
    $('.moving-image').css({ left: 0, top: minYPos })
  } else if (finalX < 0 && finalX > minXPos && finalY < minYPos) {
    $('.moving-image').css({ left: finalX, top: minYPos })
  } else if (finalX < minXPos && finalY < minYPos) {
    $('.moving-image').css({ left: minXPos, top: minYPos })
  } else {
    $('.moving-image').css({ left: finalX, top: finalY })
  }
})
