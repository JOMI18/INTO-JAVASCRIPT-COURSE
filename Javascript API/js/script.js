// function getProd(){

function getProduct(){
    if ( spinner.style.display='none') {
        spinner.style.display='block'
    }
    fetch("https://fakestoreapi.com/products/")
    .then((response) => response.json())
    .then((data) => {
        if (data) {
            spinner.style.display='none'
        }
      console.log(data);
      data.forEach((element) => {
        product.innerHTML += `
                  <div class="container">
                    <h2>${element.category}</h2>
             
                  <div class="card" style="width:400px" he>
                  <img class="card-img-top" src="${element.image}" alt="Card image" style="width:100;" >
                  <div class="card-body">
                  <h4 class="card-title">${element.title}</h4>
                  <p class="card-title">${element.price}</p>
  
                  <p class="card-text">${element.description}</p>
                  <a href="#" class="btn btn-primary">See Profile</a>
                  </div>
              </div>
              <br>
              </div>
  
             `;
      });
    })
    .catch((error) => {
        if (error) {
            spinner.style.display='none'
            alert('there is an error')
        }
    });
}
getProduct()

// }
