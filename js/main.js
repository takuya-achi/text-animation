$('.section-2 .letters').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  anime.timeline()
    .add({
        targets: '.fadeup .fadeup-wrapper .letter',
        translateY: ["2em", 0],
        translateX: ["0", 0],
        translateZ: 0,
        duration: 2550,
        delay: 3000,
        easing: "easeOutExpo",
        delay: function(el, i) {
            return 50 * i;
        }

    }).add({
        targets: '.fadeup .fadeup-wrapper',
        duration: 3000,
        easing: "easeOutExpo",
        delay: 3000
    });