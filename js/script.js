$(function(){
  var animation = "fadeIn";
  var url = location.hash.slice(1);
  if(url){
    $('.tabs li, .tab_content .current').removeClass('current').removeClass(animation);
    $('#' + url).addClass('current ' + animation );
    $('.tabs li a[href=#' + url + ']').parent().addClass('current');
  }
  $('.tabs li a').click(function(e){
      var clicked_url = location.hash.slice(1);
      if( url !== clicked_url) { $('#' + clicked_url).addClass('current ' + animation); }
      $('.tabs li, .tab_content .current').removeClass('current').removeClass('fadeInLeft');
      $(this).parent().addClass('current');
      var currentTab = $(this).attr('href');
      $(currentTab).addClass('current ' + animation);
      e.preventDefault();
  });
});



