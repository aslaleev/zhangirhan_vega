var cart={};
var man={};
$('document').ready(function(){
//loadFoods();
//chhekCart();
//showMiniCard();

});



//function loadFoods() {
//// загружаю товар на страницу jquery
//$.getJSON('data/food.json', function(data){
//// console.log(data);
//    var out = '';
//    for(var key in data){
//        out+='<div class="single-foods">';
//        out+='<p>' + data[key]['name'] + '</p>';
//        out+='<p>Цена: ' + data[key]['price'] + '</p>';
//        out+='<img src="' + data[key]['image'] + '" width="180">';
//        out+='<button class="add-to-cart" data-art="'+ key +'">Добавить</button>';
//        out+='</div>';
//    }
//    $('#foods').html(out);
//    $('button.add-to-cart').on('click',addToCard);
//})
//}

function addToCard(){
// добавляем товар в корзину
var articul = $(this).attr('data-art');
if (cart[articul]!=undefined){
    cart[articul]++;
}
else{
    cart[articul]=1;
}
localStorage.setItem('cart',JSON.stringify(cart));
showMiniCard();
}


function addToCard2(i){
// добавляем товар в корзину

var articul = $(this).attr('data-art');
if (cart[articul]!=undefined){
    cart[articul]++;
}
else{
    cart[articul]=1;
}
localStorage.setItem('cart',JSON.stringify(cart));
showMiniCard();
}



function chhekCart(){
// проверяю наличие товаров
if (localStorage.getItem('cart') != null){
    cart = JSON.parse(localStorage.getItem('cart'));
}
}


function showMiniCard(){
// отображаю корзину
var out = '';
for (ww in cart){
    out += ww + '---' + cart[ww] +'<br>';
}
out += '<br><a href = "cart.html"> Корзина </a>'
$('#mini-cart').html(out);
}




new Vue({
  el: '#app',
  data: {
      info: 1,
      id:0,
  },
  mounted() {
        ChangeCategory(event);
  },
  methods:{
    ChangeCategory(event){
        id = event.target.value;
        console.log(id)
        axios.get(`http://127.0.0.1:5000/todo/api/v1.0/food/${id}`)
        .then(response => (this.info=response.data))
         .catch(error => console.log(error));
            var out = '';
            console.log(666)
            for(var i in this.info){
                console.log(this.info[i]["image"])
                out+='<div class="single-foods">';
                out+='<p>' + this.info[i]['name'] + '</p>';
                out+='<p>Цена: ' + this.info[i]['price'] + '</p>';
                out+='<img src="' + this.info[i]['image'] + '" width="180">';
                out+='<button class="add-to-cart" data-art="'+ i +'">Добавить</button>';
                out+='</div>';
            }
//            }
            $('#foods').html(out);
            $('button.add-to-cart').on('click',addToCard2(id));

    },
//    showMiniCard(){
//// отображаю корзину
//        var out = '';
//        for (ww in cart){
//            out += ww + '---' + cart[ww] +'<br>';
//        }
//        out += '<br><a href = "cart.html"> Корзина </a>'
//        $('#mini-cart').html(out);
//    },
//    chhekCart(){
//// проверяю наличие товаров
//        if (localStorage.getItem('cart') != null){
//            cart = JSON.parse(localStorage.getItem('cart'));
//        }
//    },
//    addToCard(){
//// добавляем товар в корзину
//        var articul = $(this).attr('data-art');
//        if (cart[articul]!=undefined){
//            cart[articul]++;
//        }
//        else{
//            cart[articul]=1;
//        }
//        localStorage.setItem('cart',JSON.stringify(cart));
//        showMiniCard();
//    },
    }
});