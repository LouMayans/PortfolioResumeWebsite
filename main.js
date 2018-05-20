window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  window.onload = function(){
    resize();
  }

window.onresize = function() {
    resize();
}

var screenSmall = false;
function resize(){
    if($(window).width() <= 620 && screenSmall == false)
    {
        screenSmall = true;
        div1 = $('.hName');
        div2 = $('.one');

        tdiv1 = div1.clone();
        tdiv2 = div2.clone();

        if(!div2.is(':empty')){
            div1.replaceWith(tdiv2);
            div2.replaceWith(tdiv1);

            tdiv1.addClass("replaced");
            
        }
        $('.topnav ul li').css("display", "block");
    }
    else if ($(window).width() > 620 && screenSmall == true){
        screenSmall = false;
        div1 = $('.one');
        div2 = $('.hName');

        tdiv1 = div1.clone();
        tdiv2 = div2.clone();

        if(!div2.is(':empty')){
            div1.replaceWith(tdiv2);
            div2.replaceWith(tdiv1);

            tdiv1.addClass("replaced");
        }
        $('.topnav ul li').css("display", "inline-block");
    }
}

$(function (){
    var lastScrollTop = 0, delta = 5;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       
        if(Math.abs(lastScrollTop - st) <= delta)
        return;
       

        //var headerClassName = document.getElementById("header").className;
        
        //CHECK IF ANIMATION PLAYING AND DONT STOP IT?

        if (st > lastScrollTop){
            //scroll down
            //$(this).toggleClass("out");
            document.getElementById("header").className = "out";
        } else {
            //scroll up
            document.getElementById("header").className = "in";
        }
        lastScrollTop = st;
    });
});
