$(function(){
    $('#Home .home__bottom a').click(function(e){
        e.preventDefault();
        if($(this).attr('href')=="/quickstart"){
            $("#QuickStart").css({'left':'0'})
        } else {
            $("#Login").click(function(e){
                e.preventDefault();
            })
        }
    })

    $('.module-page .btn-back').click(function(){
        $(this).parents('.module-page').css({'left':'100%'})
    })

    //General
    $(".btn-back").click(function(e){
        e.preventDefault();
    })
})
