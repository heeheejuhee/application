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

    //Accommodation Result button
    $('.see-result-btn:not(.total-cost)').on('click',function(){
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

        $('.accommodation-type .type.active').unbind('click').on('click',function(){
            var type = $(this).data('type');
            var cost = $(this).data('cost');
            updateStatus(type, cost, peopleValue, daysValue);

            $('.layer').removeClass('active');
            $('.layer.layer-totalcost').addClass('active');
        })
    });

    $('.total-cost').on('click',function(){
        $('#Result').addClass('active');
    })
})

function updateStatus(t, c, p, d){
    var totalcostPage = $('.layer-totalcost');
    var cost = d * c;
    var perPerson = cost / p;
    var hasBreakfast = $('input[name=breakfast]:checked').val();

    totalcostPage.find('.title').text(t);
    totalcostPage.find('.people').text(p);
    totalcostPage.find('.days').text(d);
    totalcostPage.find('.final-cost').text(numberToDollar(cost));
    totalcostPage.find('.per-person').text(numberToDollar(perPerson));
    if(hasBreakfast){
        totalcostPage.find('.has-breakfast').text(numberToDollar(p * 7));
    } else {
        totalcostPage.find('.has-breakfast').text(numberToDollar(0));
    }
}

function numberToDollar(num){
    return "$" + parseFloat(Math.round(num * 100) / 100).toFixed(2);
}
