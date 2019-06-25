$(document).ready(function(){
    
    $('a').click(function(e){
    	e.preventDefault()
    });
    
    // $('')

    setTimeout(function(){
        $('.circular-navigation').addClass('circular-nav-loaded');
    },1000);


});
