import "./fwslider";

$(document).ready(function() {
    $('#slider').fwslider({
        auto:     true,  //auto start
        speed:    300,   //transition speed
        pause:    4000,  //pause duration
        panels:   5,     //number of image panels
        width:    1680,
        height:   300,
        nav:      true   //show navigation
    });
});
