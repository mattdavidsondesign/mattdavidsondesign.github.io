var coll = document.getElementsByClassName("collapsible")
var i

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active")
    var content = this.nextElementSibling
    if (content.style.display === "block") {
      content.style.display = "none"
    } else {
      content.style.display = "block"
    }
  })
}
var j$ = jQuery,
    $nav = j$("#navigation"),
    $slideLine = j$("#slide-line"),
    $currentItem = j$(".current-item");

j$(function(){  
  // Menu has active item
  if ($currentItem[0]) {
    $slideLine.css({
      "width": $currentItem.width(),
      "left": $currentItem.position().left
    });
  }
  
  // Underline transition
  j$($nav).find("li").hover(
    // Hover on
    function(){
      $slideLine.css({
        "width": j$(this).width(),
        "left": j$(this).position().left
      });
    },
    // Hover out
    function(){
      if ($currentItem[0]) {
        // Go back to current
        $slideLine.css({
          "width": $currentItem.width(),
          "left": $currentItem.position().left
        });
      } else {
        // Disapear
        $slideLine.width(0);
      }
    }
   );
});