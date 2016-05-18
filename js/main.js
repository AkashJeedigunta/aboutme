var initLoader = {

    navScroll: function () {
        var scroll_start = 0;
        var startchange = $('#home');
        var offset = startchange.offset();
        if (startchange.length) {
            $(document).scroll(function () {
                scroll_start = $(this).scrollTop();
                if (scroll_start > offset.top) {
                    $("#navbar-main").css({
                        'background-color': 'white'
                        , 'box-shadow': '0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23)'
                    });
                    $('.navbar.navbar-default .navbar-brand , #navbar-main .nav.navbar-nav.navbar-right li a').css({
                        'color': '#666'
                        , 'text-transform': 'uppercase'
                    });
                    $('.navbar-default .navbar-toggle .icon-bar').css({
                        'background-color': '#666'
                    });
                } else {
                    $('#navbar-main').css({
                        'background-color': 'transparent'
                        , 'box-shadow': 'none'
                    });
                    $('.navbar.navbar-default .navbar-brand , #navbar-main .nav.navbar-nav.navbar-right li a').css({
                        'color': '#FFFFFF'
                        , 'text-transform': 'initial'
                    });
                    $('.navbar-default .navbar-toggle .icon-bar').css({
                        'background-color': '#FFFFFF'
                    });
                }
            });
        }
    }
    , animateHover: function () {
        $('#information .intrestDivs .square').mouseenter(function () {
            $(this).addClass('animated bounce');
        });
        $('#information .intrestDivs .square').mouseleave(function () {
            $(this).removeClass('animated bounce');
        });

    }
};
$(document).ready(function () {
    initLoader.navScroll();
    initLoader.animateHover();
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });
    $('.carousel').carousel({
        interval: 6000
    })
    $.fn.equalizerAnimation = function (speed) {    
        var $equalizer = $(this);    
        setInterval(function () {        
            $equalizer.find('span').eq(0).css({
                height: randomBetween(10, 30) + 'px'
            });        
            $equalizer.find('span').eq(1).css({
                height: randomBetween(20, 40) + 'px'
            });        
            $equalizer.find('span').eq(2).css({
                height: randomBetween(30, 55) + 'px'
            });        
            $equalizer.find('span').eq(3).css({
                height: randomBetween(25, 50) + 'px'
            });        
            $equalizer.find('span').eq(4).css({
                height: randomBetween(20, 40) + 'px'
            });    
        }, speed);    
        $equalizer.on('click', function () {        
            var song = $(this).next('audio').get(0);
            if (song.paused) {
                song.play();
                $equalizer.toggleClass('paused');
            } else {
                song.pause();
                $equalizer.toggleClass('paused');
            }
        });
    }
    $('.equalizer').equalizerAnimation(180);

    function randomBetween(min, max) {
        if (min < 0) {
            return min + Math.random() * (Math.abs(min) + max);
        } else {
            return min + Math.random() * max;
        }
    }

    var cnt = 0
        , texts = ["Akash Jeedigunta", "a Web Developer"];

    // save the texts in an array for re-use
    $(".textContent").each(function () {
        texts[cnt++] = $(this).text();
    });

    function wordShuffler() {
        if (cnt >= texts.length) cnt = 0;
        $('#textMessage').html(texts[cnt++]);
        $('#textMessage').css("font-weight", "500").fadeIn('slow').animate({
            opacity: 2.0
        }, 4000).fadeOut('slow'
            , function () {
                return wordShuffler()
            }
        );
    }
    wordShuffler()
});