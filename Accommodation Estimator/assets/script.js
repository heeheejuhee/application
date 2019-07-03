var peopleValue = 0;
var daysValue = 0;
var dailyCost = 0;
var type = '';
var mealPrice = 7;
var accomodatCost = 0;
var mealCost = 0;
var total =0;

$(function(){

	setTimeout(function(){
        $('.circular-navigation').addClass('circular-nav-loaded');
    },300);

    $('a').on('click',function(e){
        e.preventDefault();
    });

    $('a[data-target]').on('click',function(e){
    	e.preventDefault();
    	var sLayer = $(this).data('target');
    	$('.active').removeClass('active');
    	$(sLayer).addClass('active');
    });

    $('.update-type').on('click',updateTypes);

    //Increase or Decrease Number//
    $('.number-controller button').on('click',function(e){
        var value = $(this).attr('class');
        var numberText = $(this).siblings('span');
        var forPeople = $(this).parents('.number-controller').hasClass('number-controller-people');
        var currentNumber = parseInt(numberText.text());
        var maxNumber = 15;

        if(forPeople){ maxNumber = 4 ;}

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
    // $('.see-result-btn:not(.total-cost)').on('click',function(){
    $('.number-controller .minus, .number-controller .plus').on('click',updateTypes);

    //Next button
    $('.next').on('click',function(e){
        e.preventDefault();
        var sLayer = $(this).data('target');
        $('.layer').removeClass('active');
        $(sLayer).addClass('active');
    });

    $('.accommodation-type .type').on('click',function(){
        type = $(this).data('type');
        dailyCost = $(this).data('cost');
        accomodatCost = dailyCost*daysValue;
        updateStatus();

        $('.layer').removeClass('active');
        $('.layer.layer-totalcost').addClass('active');
    });

    $('.total-cost').on('click',function(){
        
         $('#Result').addClass('active');
        if($('[name=breakfast][value=true]:checked').length>0){
            mealCost = mealPrice * daysValue *peopleValue;
            
        } else{ mealCost = 0;}

        total = accomodatCost + mealCost;
        updateStatus();
        // console.log(total);
    });


});


      
      //   $('.total-cost').unbind('click').on('click',function(){
      //       $('#Result').addClass('active');
      //       updateBreakfast(peopleValue);
      //   })

function updateStatus(){

    var totalcostPage = $('.layer-totalcost, .layer-choice');
    accomodatCost = daysValue*dailyCost;
    var perPerson = total / peopleValue;
   


    totalcostPage.find('.title').text(type);
    totalcostPage.find('.people').text(peopleValue);
    totalcostPage.find('.days').text(daysValue);
    totalcostPage.find('.final-cost').text(numberToDollar(accomodatCost));
    totalcostPage.find('.has-breakfast').text(numberToDollar(mealCost));
    totalcostPage.find('.totalcost').text(numberToDollar(total));
    totalcostPage.find('.per-person').text(numberToDollar(perPerson));
}

// function updateBreakfast(p){
//      var mealCost = 0;
//     if($('[name=breakfast][value=true]:checked').length>0){
//         mealCost = mealPrice * daysValue *peopleValue;
//     }

//     var total = cost + mealCost;

// }

function numberToDollar(num){
    return "$" + parseFloat(Math.round(num * 100) / 100).toFixed(2);
}

function updateTypes(){
    peopleValue = parseInt($('.number-controller-people span').text());
    daysValue = parseInt($('.number-controller-days span').text());
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
  
}
