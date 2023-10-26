export {crearCards, bajarProducto, imprimirDetalle, guardarProducto};

const crearCards = function (products) {
    const containerCard=document.querySelector('.container');
    for (let i=0; i<products.length; i++){
        const nombre = document.createElement("h3")
        const imagen = document.createElement("img")
        const precio = document.createElement("h4")
        const card = document.createElement("article")
        const btnDetail=document.createElement('button')
        nombre.innerHTML = products[i].title
        imagen.src = products[i].image
        precio.innerHTML = products[i].price
        btnDetail.innerHTML = "Ver detalle"
        btnDetail.classList.add("btnDetail")
        btnDetail.addEventListener("click", ()=>{
           guardarProducto(products[i], "carrito");
        window.location.assign("http://127.0.0.1:5500/pages/detail.html");
        })    
        card.append(nombre, imagen, precio, btnDetail);           
        containerCard.appendChild(card)
    }
}
const imprimirDetalle = function (products){
    const containerDetail=document.getElementById('containerDetail');
    const cardDet = document.createElement("article")
    const nombre = document.createElement("h3")
    const imagen = document.createElement("img")
    const precio = document.createElement("h4")
    const description = document.createElement("h6");
    const btnBuy=document.createElement('button')
    nombre.innerHTML = products.title
    imagen.src = products.image
    precio.innerHTML = products.price
    description.innerHTML= products.description;
    btnBuy.innerHTML = "Comprar";
    btnBuy.classList.add("btnBuy");
    btnBuy.addEventListener("click", ()=>{
        guardarProducto(products, "carrito");
            window.location.assign("http://127.0.0.1:5500/pages/cart.html");
        })                
            cardDet.append(nombre, imagen, precio, description, btnBuy); 
            containerDetail.appendChild(cardDet);
    }
    //convierto el string a formato JSON (deserializar)
    const bajarProducto = function (key) {
        const produ = window.localStorage.getItem(key)
        if (produ) {
            let prodJson = JSON.parse(produ);
            return prodJson
        } else return []
    }
    //convierto los datos en un string (serializar)
    const guardarProducto = function (producto, key) {
        const cart = JSON.stringify(producto)
        return window.localStorage.setItem(key, cart)
    }