var cart={}; // корзина

$.getJSON('data/food.json', function (data) {
    var food = data;
    // console.log(food);
    chhekCart();
    showCart();
    function showCart(){
        if ($.isEmptyObject(cart)){
            var out = 'Корзина пуста. Добавьте товар в корзину <a href="index.html">главная страница</a>';
            $('#mini-cart').html(out);
        }
        else{
            var out='';
            out = '<tr>'
            out += '<th>Удалить</th>'
            out += '<th>Товар</th>'
            out += '<th>Наименование</th>'
            out += '<th>Количество</th>'
            out += '<th>Убрать</th>'
            out += '<th>Добавить</th>'
            out += '<th>Сумма</th>'
            out += '</tr>'
            for(var key in cart){
                out+= '<tr>'
                out+= '<td align=center>' + '<button class="delete" data-art="'+key+'">x</button>' + '</td>';
                out+= '<td align=center>' + '<img src="' + food[key]['image'] + '" width="60">' + '</td>';
                out+= '<td align=center> ' + food[key].name  + '</td>';
                out+= '<td align=center>' + cart[key] + '</td>';
                out+= '<td align=center>' + '<button class="minus" data-art="'+key+'">-</button>' + '</td>';
                out+= '<td align=center>' + '<button class="plus" data-art="'+key+'">+</button> <br>' + '</td>';
                out+= '<td align=center>' + cart[key]*food[key].price + '</td>'; 
                out+='</tr>'
            }
            $('#mini-cart').html(out);
            $('.plus').on('click',plusFood);
            $('.minus').on('click',minusFood);
            $('.delete').on('click',deleteFood);
        }
    }
    
    function plusFood(){
        var articul = $(this).attr('data-art');
        cart[articul]++;
        saveCartToLS();
        showCart();
    }

    function minusFood(){
        var articul = $(this).attr('data-art');
        if (cart[articul]>1){
            cart[articul]--;
        }
        else {
            delete cart[articul]; 
        }
        saveCartToLS();
        showCart();    
    }

    function deleteFood(){
        var articul = $(this).attr('data-art');
        delete cart[articul]; 
        saveCartToLS();
        showCart();    
    }
});

function chhekCart(){
    // проверяю наличие товаров
    if (localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}


function saveCartToLS(){
    localStorage.setItem('cart',JSON.stringify(cart));
}