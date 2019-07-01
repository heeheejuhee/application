
$(function(){
	setTimeout(function(){
        $('.circular-navigation').addClass('circular-nav-loaded');
    },300);

    $('a').on('click',function(e){
        e.preventDefault();
    })

    $('a[data-target]').on('click',function(e){
    	e.preventDefault();
    	var sLayer = $(this).data('target');
    	$('.active').removeClass('active');
    	$(sLayer).addClass('active');
    });

    $('.number-controller button').on('click',function(e){
        var value = $(this).attr('class');
        var numberText = $(this).siblings('span');
        var forPeople = $(this).parents('.number-controller').hasClass('number-controller-people');
        var currentNumber = parseInt(numberText.text());
        var maxNumber = 15;

        if(forPeople){ maxNumber = 4 };

        if(value === 'plus'){
            if(currentNumber < maxNumber ){
                currentNumber += 1;
            }
        } else {
            if(currentNumber > 1){
                currentNumber -= 1;
            }
        }
        numberText.text(currentNumber);
    });

    $('.see-result-btn').on('click',function(){
        var peopleValue = parseInt($('.number-controller-people span').text());
        var daysValue = parseInt($('.number-controller-days span').text());
        var allTypes = $('.accommodation-type');
        var types = {
            hostel: allTypes.children('.hostel'),
            motel: allTypes.children('.motel'),
            hotel: allTypes.children('.hotel'),
            house: allTypes.children('.house'),
        };
        allTypes.children('.type').removeClass('active');

        if( peopleValue < 2 && daysValue < 11 ){
            types.hostel.addClass('active');
        }
        if( peopleValue < 5 && daysValue < 16 && daysValue > 1 ){
            types.house.addClass('active');
        }
        if( peopleValue > 1 && peopleValue < 5 && daysValue < 11 && daysValue > 2 ){
            types.motel.addClass('active');
        }
        if(  peopleValue < 3 && daysValue < 6 ){
            types.hotel.addClass('active');
        }

    })

})
