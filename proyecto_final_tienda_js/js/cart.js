import {bajarProducto, guardarProducto} from "./main.js";

let cart=[];       
console.log(bajarProducto("carrito"));
let prod =(bajarProducto("carrito"));

console.log(cart);

const llenarCart = ()=>{       
            console.log(cart);
            cart.push(prod);
            guardarProducto(cart, "carrito");              
}
llenarCart(prod);

const containerCart=document.querySelector('.containerCart');
const imprimirCart = function (products, cart){
    console.log(products);
    console.log(cart);
    let codeCardCart=`        
            <article class="cardCart">
                <h6 class="prodBuyName">${products.title}</h6>
                <h6 class="prodBuyPrice">${products.price}</h6>
            </article>
            <article class="btnCart">
                <button class="btnAddProd">Agregar más productos</button>
                <button class="btnDeleteProd">Eliminar producto</button>
                <button class="btnFinBuy">Finalizar Compra</button>
            </article>        
        `
    containerCart.innerHTML+=codeCardCart;    
}
imprimirCart(prod, cart);

const btnAddProd = document.querySelector(".btnAddProd");
btnAddProd.addEventListener('click', ()=>{
    guardarProducto(prod, "carrito");
    window.location.assign("http://127.0.0.1:5500/index.html");
})
const btnDeleteProd = document.querySelector(".btnDeleteProd");
btnDeleteProd.addEventListener("click", ()=>{
    alert("Esta seguro de eliminar producto?")
    cart.pop(prod);
    imprimirCartVacio();
    window.localStorage.clear();
    console.log(cart);
})

const imprimirCartVacio = function (){   
    console.log(cart); 
    containerCart.innerHTML="";   
}

const btnFinBuy = document.querySelector(".btnFinBuy");
btnFinBuy.addEventListener('click', ()=>{    
    if (confirm("Está seguro de finalizar la compra?")==true){
        sumarCart(cart);
        simularPago(cart);          
        return window.localStorage.clear();
    } else {
        alert("Puede seguir comprando")
        window.location.assign("http://127.0.0.1:5500/index.html");
    }
})
const formCart=document.querySelector('.formCart');
const formPay = document.createElement("form");
function sumarCart(cart) {
    let subtotal=0;
    subtotal+= parseInt(cart.price);
    console.log(subtotal);
    formCart.innerHTML=`
    El total a pagar es: ${subtotal};
    `
}

function simularPago(cart) {
    const nameInput=document.createElement("input");
    nameInput.setAttribute("type", "text");
    const mailInput=document.createElement("input");
    const btnPay=document.createElement("button");
    const error=document.createElement("h4");
    btnPay.classList.add("btnPay");
    btnPay.innerHTML="Enviar";
    mailInput.setAttribute("type", "email");
    nameInput.classList.add("name");
    mailInput.classList.add("mail");
    nameInput.placeholder="ingrese su nombre";
    mailInput.placeholder="ingrese su mail";
    formPay.append(nameInput, mailInput, btnPay, error);
    formCart.appendChild(formPay);        
        formPay.addEventListener("submit", (e)=>{
            e.preventDefault();           
                let msjError=[];
                if(nameInput.value===''||nameInput.value==null){
                    msjError.push("Ingresa tu nombre");
                }
                if(mailInput.value===''||mailInput.value==null){
                    msjError.push("Ingresa tu mail");
                    error.innerHTML=msjError.join(' , ')
                }                
                pago();
                return false;                
            })
            containerCart.innerHTML=`
            <h4>Por favor ingrese sus datos, para recibir el link de pago por mail.</h4>
            <h4>Gracias por su compra.</h4>      
            `      
        }        
function pago() {
    const msjPago=document.createElement("h4");
    formPay.append(msjPago);
    formCart.appendChild(formPay);    
    setTimeout(() => {
        formPay.innerHTML="El link de pago fue enviado exitosamente";            
    }, 2000);
}








