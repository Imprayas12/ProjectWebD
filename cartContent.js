window.onload = function loadCart(){
    // console.log("I am running");
    let output = "";
    let items = JSON.parse(localStorage.getItem('cartItems'));
    for(let i = 0; i< items.length; i++){
        let id = items[i][0];
        fetch('../objects.json')
    .then(response => response.json())
    .then(data => { 
        // file = data; 
        data.forEach(item => {
            
            if(item.p_id == id){
                console.log(item.p_id);
                output += `
                <div class = "Cart-Items">
                <div class="image-box">
                <img src="${item.image}" style="height:120px;"/>
                </div>
                <div class= "about">
                <h1 class= "title">${item.Model_Name}</h1>
                    <br>
                <h3 class= "subtitle">Size: UK 9</h3>
                </div>
                <div class="counter">
                    <div class="btn">+</div>
                    <div class="count">${items[i][1]}</div>
                    <div class="btn">-</div>
                </div>
                <div class= "prices">
                    <div class="amount">${item.Price}</div>
                    </div> </div>`;
                }
                // console.log(output);
                document.querySelector('.cart-Content').innerHTML = output;
            });
        });

    }
    output = "";
    let number = localStorage.getItem('cartNumbers');
    let cost = localStorage.getItem('totalCost');
    output += `
    <div class= "checkout" >
    <div class= "total" >
    <div>
    <div class= "Subtotal" >Sub-Total</div>
    <div class= "items">${number} items</div>
    </div>
    <div class= "total-amount">$${cost}</div>
    </div>
    <button class = "button">Place Order</button>
    </div>
    `;
    console.log(output);
    document.querySelector('.payment').innerHTML = output;
}