
window.addEventListener('DOMContentLoaded', (e) => {
  loadCart();  
});

function loadCart(){
    // console.log("I am running");
    let output = "";
    let totalCost = 0;
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
                    <div class="btn"><a role = "button" onclick = "quantity('add',${item.p_id},${item.Price})">+</a></div>
                    <div class="count" id = "${items[i][0]}">${items[i][1]}</div>
                    <div class="btn"><a role = "button" onclick = "quantity('sub',${item.p_id},${item.Price})">-</a></div>
                    <br>
                </div>
                
                <div class = "btn" style = "display:block; margin-top:5%"><a role = "remover" onclick = "remove_item(${item.p_id},${item.Price})">&times;</a></div>
                <div class= "prices">
                    <div class="amount">$${item.Price}</div>
                    </div> </div>`;
                    totalCost += item.Price * items[i][1];
                }
                // console.log(output);
                localStorage.setItem('totalCost',totalCost);
                document.querySelector('.cart-Content').innerHTML = output;
            });
        });

    }
    output = "";
    let number = localStorage.getItem('cartNumbers');
    let cost = localStorage.getItem('totalCost');
    output += `
    <div class= "checkout">
    <div class= "total">
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
        window.location.href = "index.html";
    }
}

function quantity(change,id,price){

    console.log('gothere');
    let id_arr = JSON.parse(localStorage.getItem('cartItems'));
    let i = 0;
    let totalCost = 0;
    // console.log(typeof parseInt(price));
    for(i = 0; i < id_arr.length; i++){
        if(id_arr[i][0] == id){
            if(change.match("add")) {    
                id_arr[i][1] += 1;
                totalCost = parseInt(localStorage.getItem('totalCost'));
                totalCost += price;
                localStorage.setItem('totalCost',totalCost);
            }
            else if(change.match("sub")){
                if(id_arr[i][1]>1) {
                   id_arr[i][1] -= 1;
                totalCost = parseInt(localStorage.getItem('totalCost'));
                totalCost = totalCost - price;
                localStorage.setItem('totalCost',totalCost);
                }
            }
            localStorage.setItem('cartItems',JSON.stringify(id_arr));
            document.getElementById(id).textContent = id_arr[i][1];
            document.querySelectorAll('.total-amount').forEach (function (e) {
                e.innerHTML = "$" + localStorage.getItem('totalCost');
            }); 
            break;
        }
    // }
    // document.querySelector('.count').innerHTML = id_arr[i][1];
    }
    
}

function remove_item(id,price) {
    let arr = JSON.parse(localStorage.getItem('cartItems'));
    let arr_new = [];
    let amt = 0;
    for(let i = 0; i< arr.length;i++){
        if(arr[i][0] == id){
            amt = parseInt(arr[i][1])*parseInt(price);
            console.log(amt);
            continue;
        }
        arr_new.push(arr[i]);
    }
    localStorage.setItem('cartItems',JSON.stringify(arr_new));
    totaCost = parseInt(localStorage.getItem('totalCost'));
    totaCost = totaCost - amt;
    localStorage.setItem('totalCost',totaCost);
    loadCart();
    onLoadCart();
}
function remove(){
    localStorage.clear();
    window.location.reload();
}