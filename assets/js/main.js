/*-----------------------------------------------------------------------------
Theme Name: staco
Author: uigigs
Author URL: https://themeforest.net/user/uigigs/portfolio
-----------------------------------------------------------------------------*/
(function ($) {
//    ("use strict");

$(document).ready(function(){
    $('.buy-btn, .back-btn').click(function() {
      $('.card-content2, .card-content').toggle();
    });
});

// progressbar js
let bar = new ProgressBar.SemiCircle("#container", {
  strokeWidth: 8,
  color: "white",
  trailColor: "rgba(255,255,255, 0.4)",
  trailWidth: 8,
  easing: "easeInOut",
  duration: 1400,
  svgStyle: null,
  text: {
    value: "",
    alignToBottom: false,
    className: "progressbar__label"
  },

  // Set default step function for all animate calls
  step: (state, bar) => {
    bar.path.setAttribute("stroke", state.color);
    var value = Math.round(bar.value() * 100);
    if (value === 0) {
      bar.setText("");
    } else {
      bar.setText(value);
    }

    bar.text.style.color = state.color;
  }
});
bar.animate(0.2); // Number from 0.0 to 1.0
})(jQuery);
