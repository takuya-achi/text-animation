 $('.section-2 .letters').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});



  anime.timeline()

    .add({
        targets: '.fadeup .fadeup-wrapper .letter',
        translateY: ["4em", 0],
        translateX: ["0", 0],
        translateZ: 0,
        duration: 1000,
        delay: 1000,
        easing: "easeOutExpo",
        delay: function(el, i) {
            return 30 * i;
        }

    }).add({
        targets: '.fadeup .fadeup-wrapper',
        duration: 2000,
        easing: "easeOutExpo",
        delay: 2000
    });


    
  anime.timeline()

     .add({
        targets: '.sideshow .sideshow-wrapper .letter',
        translateY: ["0", 0],
        translateX: ["2em", 0],
        opacity: [0, 1],
        translateZ: 0,
        duration: 2000,
        delay: 2000,
        easing: "easeOutExpo",
        delay: function(el, i) {
            return 400 * i;
        }

    }).add({
        targets: '.sideshow .sideshow-wrapper', 
    });

    