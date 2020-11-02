// For Send To Top
$(document).ready(function(){
    $("button").click(function(){
      $("body").scrollTop(100);
    });
  });









// For Underlined Nav
var j$ = jQuery,
  $nav = j$("#nav"),
  $slideLine = j$("#slide-line"),
  $currentItem = j$(".current-item");

j$(function () {
  // Menu has active item
  if ($currentItem[0]) {
    $slideLine.css({
      width: $currentItem.width(),
      left: $currentItem.position().left
    });
  }

  // Underline transition
  j$($nav)
    .find("li")
    .hover(
      // Hover on
      function () {
        $slideLine.css({
          width: j$(this).width(),
          left: j$(this).position().left
        });
      },
      // Hover out
      function () {
        if ($currentItem[0]) {
          // Go back to current
          $slideLine.css({
            width: $currentItem.width(),
            left: $currentItem.position().left
          });
        } else {
          // Disapear
          $slideLine.width(0);
        }
      }
    );
});
