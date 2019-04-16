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
    $(".btn-back, .do-nothing").click(function(e){
        e.preventDefault();
    })


    $('.menu').on('click',function(e){
        var url = $(this).data('url');
        // var defaultCart = {
        //     main : "Tonkotsu Ramen",
        //     quantity:1,
        //     addon:[
        //         {
        //             name:"Shrimp",
        //             price:0.4,
        //             quantity:0,
        //             image:'assets/shrimp.png'
        //         },
        //         {
        //             name:"Mushroom",
        //             price:0.4,
        //             quantity:0,
        //             image:'assets/shrimp.png'
        //         },
        //         {
        //             name:"Seaweed",
        //             price:0.4,
        //             quantity:0,
        //             image:'assets/shrimp.png'
        //         },
        //         {
        //             name:"Whatever",
        //             price:0.4,
        //             quantity:0,
        //             image:'assets/shrimp.png'
        //         },
        //     ]
        // }
        // localStorage.setItem("mycart",JSON.stringify(defaultCart));


        if(url){
            window.location.href = url ;
        }
    });

    if($("#Customize").length > 0){
        // var cart = JSON.parse(localStorage.getItem("mycart"));
        // var quantity = $('.yourorder-box .quantity , .price-controller .add-box span');
        // var ingredients = $('.ingredients-wrapper');
        // var addonHtml = "";

        // for(var i =0; i < cart.addon.length; i++){
        //     var name = cart.addon[i].name;
        //     var image = cart.addon[i].image;
        //     var price = cart.addon[i].price;
        //     var q = cart.addon[i].quantity;

        //     addonHtml += `
        //         <div class="ingredients" data-item="${name}">
        //             <img src="${image}" alt="">
        //              <div class="ingredients-content">
        //                 <h2>${name}</h2>
        //                 <p>$${price}</p>
        //                 <div class="add-box add-box-small">
        //                     <button class="minus">-</button>
        //                     <span>${q}</span>
        //                     <button class="plus">+</button>
        //                 </div>
        //             </div>
        //         </div>`;
        // }

        // quantity.text(cart.quantity);
        // ingredients.append(addonHtml);

        $('.add-box button').click(function(){
            var addonName = $(this).parents('.ingredients').data('item');
            var currentQ = parseInt($(this).siblings('span').text());
            var isQuantity = $(this).parents('.add-box').hasClass('quantity-js');

            if(this.className == "plus"){
                $(this).siblings('span').text(currentQ + 1);
                if(isQuantity){
                    var q = $('.yourorder-box .quantity');
                    q.text(parseInt(q.text())+1);
                }
            } else {
                if(currentQ > 0 ){
                    $(this).siblings('span').text(currentQ - 1);
                    if(isQuantity){
                        var q = $('.yourorder-box .quantity');
                        q.text(parseInt(q.text())-1);
                    }
                }
            }

        });
    }


    // $('.increase').click(function(){
    //     $('.quantity').html(function(i,val){
    //         return var*1+1
    //     });
    // })


    $('.yourorder-box, .popup1 .dismiss').on('click',function(){
        $('.popup1').toggleClass('show');
    });

    $('button.next, .popup2 .dismiss').on('click',function(){
        $('.popup1').removeClass('show')
        $('.popup2').toggleClass('show');
    });

})
