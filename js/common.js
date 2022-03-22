$(document).ready(function(){

    // 햄버거 버튼
    $('.btn_menu a').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('on');
        $('body').toggleClass('aside_on');
    });

    // // main_in scrolltop
    // $(window).scroll(function(){
    //     var main_right = $('.main_in .right').offset();
    //     var winTop = $(window).scrollTop();
    //     if(winTop > 80){
    //         $('.main_in .right').addClass('on');
    //     } else {
    //         $('.main_in .right').removeClass('on');
    //     }
    // });

    // main_in id이동
    /*
    $('.main_in .right > ul > li > a').on('click', function(){
        var m_idx = $(this).parent().index();

        $(this).attr('href', '#menu_01_0' + (m_idx + 1));
    });
    */

});
