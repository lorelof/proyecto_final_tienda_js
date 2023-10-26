Al abrir el index.html, carga los productos de "products.js" 
donde hice el fetch del data.json
Cuando se resuelve esa promesa, llama a la función "crearCards" a la que 
ya le paso por parámetro los productos.
La función crearCards imprime todos los productos con un botón de "Ver Detalle".
Ese botón tiene un evento, sube el producto al localStorage y dirige a la page "detail".
Ahi se bajan los productos del localStorage y se imprime el detalle.
Ahora los productos aparecen con el Botón comprar => sube el producto al localStorage
y dirige a la page "cart". 
La función llenarCart, hace el push para llenar el array de carrito y lo va
guardando en el localStorage.
La función imprimirCart, imprime la card del producto comprado, con 3 botones:
- Botón Agregar más productos => guardo en el localStorage y luego dirige al index
 para que pueda seguir comprando.
- Botón Eliminar Producto => elimina el producto del carrito con un pop y 
lo elimino del localStorage con clear. Llamo a la función imprimirCartVacio.
- Botón Finalizar Compra => con un confirm si es true, llamo a la función sumarCart
que suma el carrito e imprime el total y la función simularPago, es para que el usuario 
complete un mail para que le envíen el link de pago, si los datos son válidos muestra un msj
de enviado exitosamente (con un setTimeOut) y se limpia el localStorage.
 Si el confirm es false: sale un alert que dice que puede seguir comprando y dirige al index.