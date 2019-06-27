
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

    // back button
    $('.see-result-btn').on('click',function(){
    	// window.history.back();
    	// console.log('hi');
    });
})