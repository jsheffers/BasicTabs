$(function(){
  var url = location.hash.slice(1);
  if(url){
    $('.tabs li, .tab_content .current').removeClass('current').removeClass('fadeInLeft');
    $('#' + url).addClass('current fadeInLeft');
    $('.tabs li a[href=#' + url + ']').parent().addClass('current');
  }
  $('.tabs li a').click(function(e){
      var clicked_url = location.hash.slice(1);
      if( url !== clicked_url) { $('#' + clicked_url).addClass('current fadeInLeft'); }
      $('.tabs li, .tab_content .current').removeClass('current').removeClass('fadeInLeft');
      $(this).parent().addClass('current');
      var currentTab = $(this).attr('href');
      $(currentTab).addClass('current fadeInLeft');
      e.preventDefault();
  });
});



