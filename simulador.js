//Ingresar nombre del producto

let nomCliente = prompt("***COTIZADOR 3D***\n Ingresa cliente:");
console.log("Cliente: "+nomCliente);


let productos = "";
for  (let index = 0; index < 1; index++){
    productos += prompt("Ingresa: Producto: ")+"\n";
}

console.log("Producto: "+productos);
//Ingresamos datos para saber el costo del producto a imprimir

function cotizar(){
    let precioFilamento=parseInt(prompt("Ingresa precio (ARS) del filamento"));
    let pesoBobina=parseInt(prompt("Ingresar peso (g) bobina completa de filamento"));
    let pesoProducto=parseInt(prompt("Ingresa peso en gramos del producto"));
    let resultado=precioFilamento/pesoBobina*pesoProducto;
    alert("El precio de costo es: "+resultado+" ARS");
}

cotizar();
