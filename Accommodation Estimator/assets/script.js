
$(function(){
	setTimeout(function(){
        $('.circular-navigation').addClass('circular-nav-loaded');
    },300);

    $('[data-target]').on('click',function(e){
    	e.preventDefault();

    	var sLayer = $(this).data('target');
    	$('.active').removeClass('active');

    	$(sLayer).addClass('active');
    });

    
})