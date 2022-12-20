
console.log(camisetas)
function ecomm ()  {
// DESCUENTO
const descuento = () => {
    [...camisetas].forEach(productos => {
        if(productos.ofertas === true){
            productos.precio = productos.precio * 0.90
        }
    })
}
descuento()
console.log(camisetas)

//ORDEN ALFABETICO
const alfabetico = [...camisetas].sort((a, b) => a.productos.localeCompare(b.productos))

console.log(alfabetico)

}
ecomm ()

const contenedor = document.querySelector(".container")



function CardAHtml( array ) {

    for (let i = 0; i < array.length; i++) {
        const card = document.createElement("div")
        card.className ="tarjeta"
        card.innerHTML = `
            <div class = "container-img" >
                img <img src = ${array[i].img} alt=${array[i].nombre}
            </div>
            <h3> ${array[i].productos} </h3>
            <span> ${array[i].precio} </span>
        `
        contenedor.appendChild(card)        
    }
}

CardAHtml (camisetas)

confirm("Queres ver Camisetas de futbol?")