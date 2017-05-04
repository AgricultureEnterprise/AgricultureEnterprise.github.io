$(document).ready(function(){
    $('.page-scroll').click( function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 50 }, 500); 
        }
	    return false; 
    });
});