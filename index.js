// AGENCIA DE VIAJES
// Programa Cotizador de paquetes turísticos

// Valores diarios de los hoteles, media pensión y pensión completa, por pasajero

const destinos = [{id: 0, ciudad: 'Bariloche', precio: 25000, medPension: 5000, pensCompleta: 9000, enOferta: false},
                    {id: 1, ciudad: 'Cataratas', precio: 20000, medPension: 4000, pensCompleta: 7000, enOferta: true},
                    {id: 2, ciudad: 'Mar del Plata', precio: 15000, medPension: 3500, pensCompleta: 6000, enOferta: true},
                    {id: 3, ciudad: 'Ushuaia', precio: 28000, medPension: 6000, pensCompleta: 11000, enOferta: false},
                    {id: 4, ciudad: 'Salta', precio: 19000, medPension: 3900, pensCompleta: 7200, enOferta: false},
                    {id: 5, ciudad: 'San Luis', precio: 18000, medPension: 3700, pensCompleta: 6900, enOferta: true},
                    {id: 6, ciudad: 'San Martín de Los Andes', precio: 22000, medPension: 4500, pensCompleta: 8500, enOferta: false},
                    {id: 7, ciudad: 'Mendoza', precio: 20000, medPension: 4000, pensCompleta: 7200, enOferta: true},
                    {id: 8, ciudad: 'Puerto Madryn', precio: 21000, medPension: 4100, pensCompleta: 7900, enOferta: true},
                    {id: 9, ciudad: 'Las Grutas', precio: 15000, medPension: 3200, pensCompleta: 6000, enOferta: false},
                    {id: 10, ciudad: 'Villa Gessell', precio: 18000, medPension: 3700, pensCompleta: 6900, enOferta: true},
                    {id: 11, ciudad: 'Mina Clavero', precio: 21500, medPension: 4100, pensCompleta: 7900, enOferta: false},
                    {id: 12, ciudad: 'Villa General Belgrano', precio: 22000, medPension: 4300, pensCompleta: 8100, enOferta: false},
                    {id: 13, ciudad: 'San Juan', precio: 23000, medPension: 4200, pensCompleta: 8000, enOferta: false},
                    {id: 14, ciudad: 'Calafate', precio: 26000, medPension: 4800, pensCompleta: 8700, enOferta: true}]

const pensionTxt = ["Media Pensión", "Pensión Completa", "No incluye Pensión"]

// Variables Globales del cotizador

// Funciones

// function valorTotal() { // Devuelve el costo TOTAL del paquete turístico
//     let acum = destino[opcDestino - 1].precio * cantDias * cantPasajeros 
//     switch (opcPension) {
//         case 1 : acum += destino[opcDestino - 1].medPension * cantDias * cantPasajeros; break;
//         case 2 : acum += destino[opcDestino - 1].pensCompleta * cantDias * cantPasajeros; break;
//     }
//     return acum
// }

// function displayCotiz() { //Muestra la cotización --- Devuelve TRUE si continua o FALSE si debe salir
//     continuar = Number(prompt('** COTIZACION REALIZADA **\n\n' + 
//                                 'El costo total del paquete turístico es : $ ' + valorTotal() + '\n\n' +
//                                 '1 - Volver al Menú PENSION\n' + 
//                                 '2 - Salir del Cotizador')) != 2
// }

// function menuPension(){ //Permite seleccionar si se van a incluir comidas en el paquete
//     do {
//         opcPension = Number(prompt('** MENU PENSION **\n\n' + 
//                                     '1 - Media Pensión\n' +
//                                     '2 - Pensión Completa\n' +
//                                     '3 - Sin pensión\n' +
//                                     '4 - Volver al Menú DIAS'))
//         if (opcPension < 4) {
//             displayCotiz() //Llamamos a la pantalla de Cotización
//         }
//     } while (opcPension != 4 && continuar)
// }

// function menuDias(){ //Permite seleccionar la cantidad de días del viaje
//     do {
//         cantDias = Number(prompt('** MENU DIAS **\n\n' + 
//                                     'Ingrese la cantidad de días del viaje (máx. 21)\n' + 
//                                     '(0) para volver al Menú PASAJEROS'))
//         if ((cantDias  >= 1) && (cantDias <= 21)) {
//             menuPension() //Llamamos al menú PENSION
//         }
//     } while (cantDias > 0 && continuar) 
// }

// function menuPasajeros(){ //Permite seleccionar la cantidad de pasajeros
//     do {
//         cantPasajeros = Number(prompt('** MENU PASAJEROS **\n\n' + 
//                                         'Ingrese la cantidad de pasajeros (máx. 20)\n' + 
//                                         '(0) para volver al Menú DESTINO'))
//         if ((cantPasajeros  >= 1) && (cantPasajeros <= 20)) {
//             menuDias() //Llamamos al menú DIAS
//         }
//     } while (cantPasajeros > 0 && continuar)
// }

// function menuDestino(){ //Permite elegir el destino del viaje
//     let temp = ''
//     destino.forEach((element, i) => {temp+=`${i + 1} - ${element.ciudad}\n` 
//     });
//     do {
//         opcDestino = Number(prompt('** MENU DESTINO **\n\n' + temp +
//                                     '7 - Volver al Menú PRINCIPAL'))
//         if (opcDestino < 7) {
//             menuPasajeros() //Llamamos al menú PASAJEROS
//         }
//     } while (opcDestino != 7 && continuar)
// }

// function displayPrices() { //Muestra los precios de los diferentes destinos
//     let temp = ''
//     destino.forEach(element => {temp += element.ciudad + ' $ ' + element.precio + '\n'
        
//     });
//     alert('** PRECIOS POR DIA Y POR PERSONA\n\n' + 
//             ' -ALOJAMIENTO-\n' + temp)
// }

// function displayOffers() { //Muestra sólo los destinos con ofertas vigentes, filtrando por la propiedad "enOferta"
//     let temp = ''
//     destino.filter(element => element.enOferta).forEach(element => temp += element.ciudad + ' $ ' + element.precio + '\n');
//     alert('\n***** OFERTAS IMPERDIBLES ***** \n\n' +
//         'PRECIOS POR DIA Y POR PERSONA\n\n' + 
//             ' -ALOJAMIENTO-\n' + temp)
// }

// function menuPrincipal(){ //Menú principal del cotizador
//     alert('Bienvenido al Cotizador Interactivo\n' + 
//             'de nuestra Agencia de Viajes \n')
//     do {
//         opcPrincipal = Number(prompt('** MENU PRINCIPAL **\n\n' + 
//                                     '1 - Cotizar Viaje\n' +
//                                     '2 - Ver Precios\n' +
//                                     '3 - Ver Sólo Ofertas\n' +
//                                     '4 - Salir'))
//         switch (opcPrincipal) {
//             case 1 : menuDestino(); break;
//             case 2 : displayPrices(); break;
//             case 3 : displayOffers(); break;
//         }
//     } while (opcPrincipal != 4 && continuar)
//     alert('Gracias por utilizar nuestros servicios!')
// }

// Inicio

// menuPrincipal() //Llamamos al Menú Principal del Cotizador

// Fin

function calcular() { // Devuelve el costo TOTAL del paquete turístico
    let acum = destinos[destinSelect.value].precio * days.value * pax.value
        switch (pensionSelect.value) {
            case "0" : acum += destinos[destinSelect.value].medPension * days.value * pax.value; break;
            case "1" : acum += destinos[destinSelect.value].pensCompleta * days.value * pax.value; break;
        }
    return acum
}

let cotizaciones = []; //Inicializo el array de cotizaciones

const formulario = document.querySelector("#formulario");
const pax = document.querySelector("#pax");
const days = document.querySelector("#days");
const cotizList = document.querySelector("#cotizList");
const destinSelect = document.querySelector("#destinSelect");
const pensionSelect = document.querySelector("#pensionSelect");
const ownerName = document.querySelector("#owner-name");
const ultimaCotiz = JSON.parse(localStorage.getItem('ultimaCotiz'))

armarSelect()

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(destinSelect.value)
    console.log(pax.value)
    console.log(ownerName.value)
    const cotizacion = {destino: destinSelect.value, owner: ownerName.value, pax: pax.value, precio: calcular(), dias: days.value, pension: pensionSelect.value};
    console.log(cotizacion.precio)
    crearCotizacion(cotizacion);
    localStorage.setItem('ultimaCotiz', JSON.stringify(cotizacion))
    console.log(cotizacion)
});

function crearCotizacion(cotiz) {
    cotizaciones.push(cotiz);
    verCotizaciones();
}

addEventListener("DOMContentLoaded", () => 
    //verCotizaciones();
    console.log("addEventListener")
)

function armarSelect() {
    destinSelect.innerHTML = `<option value="" disabled selected>Seleccione un destino</option>`;
    destinos.forEach((destino) => {
    const { ciudad, id } = destino;
    destinSelect.innerHTML += `
    <option value="${id}">${ciudad}</option>`;
    });
}


addEventListener("DOMContentLoaded", () => {
    leerLocalStorage();
});


function leerLocalStorage(){
    if (ultimaCotiz) {
        console.log(ultimaCotiz)
        crearCotizacion(ultimaCotiz)
    }else{
        console.log('no hay cotizaciones en Local Storage')
    }
}


function verCotizaciones() {
    if (cotizaciones.length > 0) {
        renderizarCotizaciones();
    }
}

function renderizarCotizaciones() {
    cotizList.innerHTML = "";
    cotizaciones.forEach((coti) => {
    const { destino, dias, precio, pax, pension } = coti;
    cotizList.innerHTML += `
    <div class="cotiz-card">
    <h3 class="cotiz-destin">${destinos[destino].ciudad}</h3>
    <p class="cotiz-price">TOTAL $ ${precio}</p>
    <p class="cotiz-days">${dias} dias</p>
    <p class="cotiz-pax">${pax} pasajeros</p>
    <p class="cotiz-pension">${pensionTxt[pension]}</p>
    </div>
    `; // Botón de compra suprimido <button class="btn-primary">Comprar</button>
    });
}
