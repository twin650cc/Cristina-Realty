$(document).ready(function () {


anime.timeline({loop: false})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 8000,
    delay: function(el, i) {
      return 800 * i;
    }
  })

});