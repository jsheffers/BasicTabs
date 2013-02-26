$(function(){
	
	$('#tabs li a').click(function(e){

		$('#tabs li, #content .current').removeClass('current');
		$(this).parent().addClass('current');
		var currentTab = $(this).attr('href');
		$(currentTab).addClass('current');
		e.preventDefault();
	});


});

