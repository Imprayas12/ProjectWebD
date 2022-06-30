let http = new XMLHttpRequest(); //http-request object.


http.open('get','objects.json',true); //prepare request with open method

http.send();

http.onload = function() {
    
    if(this.readyState == 4 && this.status == 200){
        let SHOES = JSON.parse(this.responseText);
        let output = "";
        let i = 0;
        for(let item of SHOES){
            output += `
            <div class = "object card">
            <img src="${item.image}" alt="${item.image}" >
                <p class="Model_Name">${item.Model_Name}</p>
                <p class="Category">${item.Category}</p>
                <p class="price">
                    <span>${item.Price}</span>
                </p>
                <a href = "#" class="btn btn-dark">Add to Cart</a>
            </div>
            `;
            i += 1;
            //if(i == 6) break;
        }
        document.querySelector('.Products').innerHTML = output;
    }
}

// function mySorter(object) {
//     let = arr = JSON.parse(object);
//     let output = "";
//     for(let item of SHOES){
//         output += `
//         <div class = "object card">
//         <img src="${item.image}" alt="${item.image}" >
//             <p class="Model_Name">${item.Model_Name}</p>
//             <p class="Category">${item.Category}</p>
//             <p class="price">
//                 <span>${item.Price}</span>
//             </p>
//             <a href = "#" class="btn btn-dark">Add to Cart</a>
//         </div>
//         `;
//         //i += 1;
//         //if(i == 6) break;
//     }
//     document.querySelector('.Products').innerHTML = output;
// }

// function SorterByAscending(){

// }