let http = new XMLHttpRequest(); //http-request object.

http.open('get','objects.json',true); //prepare request with open method

http.send();

http.onload = function() {
    
    if(this.readyState == 4 && this.status == 200){
        file = this.responseText;
        let SHOES = JSON.parse(this.responseText);
    //    SHOES.sort((a,b) => a.Price - b.Price);
        let output = "";

        let i = 0;
        for(let item of SHOES){
            output += `
            <div class = "object card">
            <img src="${item.image}" alt="${item.image}" >
                <p class="Model_Name">${item.Model_Name}</p>
                <p class="Category">${item.Category}</p>
                <p class="price">
                    <span>$</span>
                    <span>${item.Price}</span>
                </p>
                <a href = "#" class="btn btn-dark addToCart" >Add to Cart</a>
            </div>
            `;
            i += 1;
            if(i == 6) break;
        }
        document.querySelector('.objects').innerHTML = output;
    }
}

function filter_category(id){
    console.log(id);
    
        let SHOES = JSON.parse(file);
    //    SHOES.sort((a,b) => a.Price - b.Price);
        let output = "";
        SHOES= SHOES.filter(x => x.Category == id);
        console.log(SHOES);
        let i = 0;
        for(let item of SHOES){
            output += `
            <div class = "object card">
            <img src="${item.image}" alt="${item.image}" >
                <p class="Model_Name">${item.Model_Name}</p>
                <p class="Category">${item.Category}</p>
                <p class="price">
                    <span>$</span>
                    <span>${item.Price}</span>
                </p>
                <a href = "#" class="btn btn-dark addToCart" >Add to Cart</a>
            </div>
            `;
            i += 1;
            if(i == 6) break;
        }
        document.querySelector('.objects').innerHTML = output;   
}

