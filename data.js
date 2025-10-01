let cart = []

// Displayproducts Function
const Displayproducts= (products=cart) =>{
    let show=``
    products.forEach(item=>{
        show+=`<div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card  pb-4 shadow-sm">
          <img  style="height: 230px;" class=" object-fit-cover"
            src="${item.image}" alt="">
          <div class=" w-100 px-2 py-2">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text flex-grow-1">${item.description.substring(0,44)}...</p>
            <p class="text-success fw-semibold fs-5">$1.5</p>
          </div>
          <div class=" w-100 px-2">
            <a href="#" class="btn btn-primary mt-auto w-100">Add to Cart</a>
          </div>
        </div>
      </div>`
    })
    document.getElementById("show-products").innerHTML=show

}

fetch("https://thoenthonny.github.io/Vegatable-API/item.json")
.then(res=>res.json())
.then(data=>{
    cart=data
    Displayproducts()
})
.catch(err=>console.log(err))

