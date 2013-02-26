$(function(){
	
	$('#tabs li a').click(function(){
		$('#tabs li, #content .current').removeClass('current');
		$(this).parent().addClass('current');
		var currentTab = $(this).attr('href');
		$(currentTab).addClass('current');
	});


});

