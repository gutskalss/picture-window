import * as $ from 'jquery'

$('.draggable-image').draggable({
  drag: function (e, ui) {
    var left = ui.position.left,
      top = ui.position.top,
      offsetWidth = ($(this).width() - $(this).parent().width()) * -1,
      offsetHeight = ($(this).height() - $(this).parent().height()) * -1

    if (
      $(this).width() > $(this).parent().width() ||
      $(this).height() > $(this).parent().height()
    ) {
      if (left > 0) {
        ui.position.left = 0
      }
      if (offsetWidth > left) {
        ui.position.left = offsetWidth
      }

      if (top > 0) {
        ui.position.top = 0
      }
      if (offsetHeight > top) {
        ui.position.top = offsetHeight
      }
    } else {
      $('.draggable-image').draggable('destroy')
    }
  },
})
