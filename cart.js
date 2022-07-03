
var c;
window.onload = function() {
    console.log(Products);
    console.log(file);
    cart = document.querySelectorAll('.addToCart');
    console.log(cart);
    let products = JSON.parse(file);
    for(let i = 0; i < cart.length; i++){
        cart[i].addEventListener('click', () => {
            cartNumbers(products[i]);
            totalCost(products[i]);
            Products.push(products[i]);
            cartItems(Products);
           // console.log(Products);
        })
    }
}

function onLoadCart() {
    let productNumber = localStorage.getItem('cartNumbers');
    document.querySelector('.countItem').textContent = productNumber;
}
function cartNumbers(product) {
    let productNumber = localStorage.getItem('cartNumbers');
    if(productNumber != null){
        localStorage.setItem('cartNumbers',parseInt(productNumber)+1);
    }
    else
    localStorage.setItem('cartNumbers',1);   
    document.querySelectorAll('.countItem').textContent = localStorage.getItem('cartNumbers');
}
function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost',cartCost + parseInt(product.Price));
    }
    else
    localStorage.setItem('totalCost',product.Price);
}
onLoadCart();

function cartItems(product) {
    let cartItem = localStorage.getItem('cartItems');
    if(cartItem != null){
        cartItem.push(product);
        localStorage.setItem('cartItems',cartItem);
    }
    else{
        localStorage.setItem('cartItems',product);
    }
    console.log(localStorage.getItem('cartItems'));
}