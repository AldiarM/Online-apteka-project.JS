// async function creatCart (Cartinfo) {
//     const {id, imgUrl, name} = Cartinfo;
//     const cart = document.querySelector("div")
//     cart.classList.add("cart")

//     const img = document.createElement("img");
//     img.src = imgUrl;
//     img.alt = "";

//     cart.appendChild(img)

//     return cart
// }

// function addToCart(Cartinfo){
//     const cart = localStorage.getItem("cart")   //null
//     const cartItem = JSON.parse(cart) || [];    //[{}, {}, {}]
//     if (cartItem.find(item => item.id == Cartinfo.id)) {
//       return
//     }
//     cartItem.push({...Cartinfo, quantity: 1})
//     localStorage.setItem("cart", JSON.stringify(cartItem))
//     window.location.reload()

//     const added = document.querySelector 
// }

// const url = 'https://65d713a527d9a3bc1d7a180d.mockapi.io/Cartinfo' // countries api 
// fetch(url) 
//   .then(response => response.json()) // accessing the API data as JSON 
//   .then(data => { 
//     data.forEach((Cartinfo) => { 
//       cards.appendChild(creatCart(Cartinfo)); 
//     }) 
//   }) 
//   .catch(error => console.error(error))