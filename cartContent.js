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
              //  console.log(item.p_id);
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
                    <div class="btn" role = "button" onclick = "quantity("+",${item.p_id})">+</div>
                    <div class="count">${items[i][1]}</div>
                    <div class="btn" "button" onclick = "quantity("-",${item.id})">-</div>
                </div>
                <div class= "prices">
                    <div class="amount">$${item.Price}</div>
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
    <button class = "button" onclick = "alert_message('Your Order has been placed')">Place Order</button>
    </div>
    `;
    console.log(output);
    document.querySelector('.payment').innerHTML = output;
}

function alert_message(message) {
    if(confirm(alert(message))){
        localStorage.clear();
        window.location.reload();
    }
}

function quantity(change,id){
    let id_arr = JSON.parse(localStorage.getItem('cartItems'));
    let i = 0;
    for(i = 0; i < id_arr.length; i++){
        if(id_arr[i][0] == id){
            console.log("found it");
            if(change.match("+")){
                id_arr[i][0] += 1;
            }
            else if(change.match("-")){
                if(id_arr[i][1]>1)
                id_arr[i][0] -= 1;
            }
            break;
        }
    // }
    // document.querySelector('.count').innerHTML = id_arr[i][1];
    }
    localStorage.setItem('cartItems',JSON.stringify(id_arr));
}