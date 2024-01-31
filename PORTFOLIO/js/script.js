    
//ハンバーガー
$(function () {

    $(".sp_btn, .sp_nav li").on('click', function () {
        $('.sp_nav').fadeToggle();
        $('.sp_btn').toggleClass('open');
    });

});


// モーダルウィンドウ
$(function () {
    $('#openModal').click(function(){
        $('#modalArea').fadeIn();
    });
    $('#closeModal , #modalBg').click(function(){
      $('#modalArea').fadeOut();
    });
    
    $('#openModal2').click(function(){
        $('#modalArea2').fadeIn();
    });
    $('#closeModal2 , #modalBg2').click(function(){
      $('#modalArea2').fadeOut();
    });
    
      $('#openModal3').click(function(){
        $('#modalArea3').fadeIn();
    });
    $('#closeModal3 , #modalBg3').click(function(){
      $('#modalArea3').fadeOut();
    });
    
  });