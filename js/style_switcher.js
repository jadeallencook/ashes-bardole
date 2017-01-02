$(document).ready(function(e) {
	
	$('.open_switcher').click(function(e) {
		$('.style_switcher').toggleClass('open');
	});

	$(".predefine_colors li div").click(function(){	
	
		var theme_color=$(this).css("background-color");
		less.modifyVars({'@color': theme_color});
		
		
		$(this).parent().parent().children('li').children('div').removeClass('active');
		$(this).addClass('active');	
		
		
	});	

 });