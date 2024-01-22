$(function () {
    
    //ハンバーガー
    $(".sp_btn, .sp_nav li").on('click', function () {
        $('.sp_nav').fadeToggle();
        $('.sp_btn').toggleClass('open');
    });

});
