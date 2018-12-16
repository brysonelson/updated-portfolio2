//====================== scroll event for the nav and header ========================

$(function navScrollStart(){
    $(window).scroll(function navScroll() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('#header-img').offset().top; // pixels to the top of div1
        var ht = $('#header-img').height(); // height of div1 in pixels
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if(scroll > os + ht -100){
            $('#nav-bar').addClass('scroll-color');
            $('.nav-item, .navbar-brand').addClass('nav-item-scroll');
        } else {
            $('#nav-bar').removeClass('scroll-color');
            $('.nav-item, .navbar-brand').removeClass('nav-item-scroll');
        }

        navScrollStart.navScroll = navScroll;
    });
});

$(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('#header-text').offset().top; // pixels to the top of div1
        //var ht = $('#header-text').height(); // height of div1 in pixels
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if(scroll > os - (os-40)){
            $('#header-text').addClass('scroll-disappear');
            $("footer").addClass("footer-scroll");
            $("#down-arrow").addClass('scroll-disappear');
            $("#footer-text-div").css("display", "block");
        } else {
            $('#header-text').removeClass('scroll-disappear');
            $("footer").removeClass("footer-scroll");
            $("#down-arrow").removeClass('scroll-disappear');
            $("#footer-text-div").css("display", "block");
        }
    });
});


//================= hovering on the shapes on the screen ===================
$("#content-1-diamond").hover(function() {
    $("#content-1-shape").addClass("content-1-shape-hover");
}, function() {
    $("#content-1-shape").removeClass("content-1-shape-hover");
});

$("#content-2-diamond").hover(function() {
    $("#content-2-shape").addClass("content-2-shape-hover");
}, function() {
    $("#content-2-shape").removeClass("content-2-shape-hover");
});

$("#content-3-diamond").hover(function() {
    $("#content-3-shape").addClass("content-3-shape-hover");
}, function() {
    $("#content-3-shape").removeClass("content-3-shape-hover");
});

$("#content-3-diamond").on("click", function() {
    $('#contactModal').modal('show');
})

//======================== clicking the down arrow animation ===============

$("#down-arrow").on("click", function() {
    event.preventDefault();
    var aTag = $("#down-arrow").attr("href")
    var offset = $(aTag).offset();
    console.log(offset);
    //.offset().top;
    $("html, body").animate({scrollTop: offset.top - 150}, 500);
})



// ======== social icon scrolling with waypoint and semantic ===============
//create var called page loaded. set it to true. once waypoint is reached, change to false.
//then in my if statement, if direction = down and page loaded = false, run function.
var pageLoad = false;

$(document).ready(function() {
$("#home-top-space").waypoint(function(direction) {
    
    if (direction === "down" && pageLoad == false) {
        pageLoad = true;
        $('.sequenced.socials .social')
            .transition({
                animation: 'scale',
                reverse: 'auto', // default setting
                interval: 250,
                duration: 500
        })
        ;
        console.log("test");
    }
}, {
    offset: '75%' 
});
})


//=========== materialize bottom hover button =============
$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'top',
        hoverEnabled: true,
    });
});


//===================== when you click about me page =================
$("#about-me-head").click(function() {
    event.preventDefault();
    $("#about-page").css("top", "0");
    document.body.style.overflow = "hidden";
    console.log("test");
})

$("#content-1-diamond").click(function() {
    event.preventDefault();
    $("#about-page").css("top", "0");
    document.body.style.overflow = "hidden";
    console.log("test");
})

$("#about-exit").click(function() {
    $("#about-page").css("top", "200vh");
    document.body.style.overflow = "auto";
    console.log("test");
})