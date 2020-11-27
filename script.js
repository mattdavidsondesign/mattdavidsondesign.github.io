$('.autoplay').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
});

$('.single-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    dots: true,
    draggable: false
})

$('.my-slick').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                centerMode: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                centerMode: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
})

var shins = $("#am-song")[0];
    
    $("#am-button").click(function() {
      if ($('audio#am-song')[0].paused == false ){
        am.pause();
      } else {
        am.play();
      }
    });