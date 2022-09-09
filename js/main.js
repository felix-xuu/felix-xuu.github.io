$(window).load(function() {
    $("#preloader").fadeOut("slow");
});

$(document).ready(function(){


     new WOW().init();


     $('#top-nav').onePageNav({
        currentClass: 'current',
        changeHash: true,
        scrollSpeed: 1200
    });


    //animated header class
    $(window).scroll(function() {
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll > 200) {
        //console.log('a');
        $(".navigation").addClass("animated");
    } else {
        //console.log('a');
        $(".navigation").removeClass("animated");
    }});

    $year = $('#timing_dashboard').data('year');
    $month = $('#timing_dashboard').data('month');
    $day = $('#timing_dashboard').data('day');
    $hour = $('#timing_dashboard').data('hour');
    $min = $('#timing_dashboard').data('min');
    $('#timing_dashboard').countUp({
        targetDate: {
            'day':      $day,
            'month':    $month,
            'year':     $year,
            'hour':     $hour,
            'min':      $min,
            'sec':      0,
        },
        omitWeeks: true
    });

});







