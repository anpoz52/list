// JavaScript Document

//繝ｭ繝ｼ繝臥判髱｢
// $(function(){
//     setTimeout(function(){
//         $("#load_img").fadeOut();
//         $('#loader').fadeOut();
//     },2000);
// });
$(function(){
    $(".tab_box p").click(function(){
        if($(window).width()<1230){
            var index = $(".contentbox-3 .inner .tab_box p").index(this);
            $(".contentbox-3 .inner .data-box>div").css("display","none");
            $(".contentbox-3 .inner .data-box>div").eq(index).css("display","block");
            $(".contentbox-3 .inner .tab_box p").removeClass("on");
            $(this).addClass("on");
        }else{
            var index = $(".contentbox-3 .inner .tab_box p").index(this);
            $(".contentbox-3 .inner .data-box>div").css("display","none");
            $(".contentbox-3 .inner .data-box>div").eq(index).css("display","flex");
            $(".contentbox-3 .inner .tab_box p").removeClass("on");
            $(this).addClass("on");
        }
    });
});


$(function(){
    var menu = $("#slide_menu"),
        body = $(document.body),
        menuWidth = menu.outerWidth();

    $(".toggle-menu").on("click",function(){
    body.toggleClass("open");
        if(body.hasClass("open")){
            menu.animate({"right" : 0},300);
            $(".bg-color").fadeIn(100);
        }else{
            menu.animate({"right" : -menuWidth},300);
            $(".bg-color").fadeOut(100);
        }
    });
});

$(window).ready(function(){
    if($(window).width()>620){
        var maxheight = $(window).height()-131;
        $("#he-max .contentbox-3").css("min-height",maxheight);
    }else{
        var maxheight = $(window).height()-111;
        $("#he-max .contentbox-3").css("min-height",maxheight);
    }
});
$(window).resize(function(){
    var maxheight = $(window).height()-131;
    $("#he-max .contentbox-3").css("min-height",maxheight);
});

$(function(){
    $(".button2").on("click",function(){
    $(".modal").toggleClass("on");
        if($(".modal").hasClass("on")){
            $(".modal").fadeIn(200);
            $(".bg-color2").fadeIn(200);
        }else{
            $("#setbtn").removeAttr('mode');
            $(".modal").fadeOut(200);
            $(".bg-color2").fadeOut(200);
        }
    });
});

$(function(){
    $(".display_items").click(function(){
        if($(this).hasClass("display_items_on")){
            $(this).removeClass("display_items_on");
            $(this).addClass("display_items");
        }
        else{
            $(this).addClass("display_items_on");
        }
    });
});

$(function(){
    $("#index_f .display_items").click(function(){
        if($(this).hasClass("off")){
            $(this).removeClass("off");
            $(this).addClass("on");
            $(this).text("ON");
        }
        else if($(this).hasClass("on")){
            $(this).removeClass("on");
            $(this).addClass("off");
            $(this).text("OFF");
        }
    });
});

$(function(){
    $("#slide_menu li a[href='/login.html']").on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        var logout = POCKIT.base.ajax.request('POST', '/users/logout.php', [], true, false);
        logout.done(function(data){
            location.href = '/login.html';
        })
    });
});