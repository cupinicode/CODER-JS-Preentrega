// AGENCIA DE VIAJES
// Programa Cotizador de paquetes turísticos

// Valores diarios de los hoteles, media pensión y pensión completa, por pasajero

const destino = [{ciudad: 'Bariloche', precio: 25000, medPension: 5000, pensCompleta: 9000, enOferta: false},
                    {ciudad: 'Cataratas', precio: 20000, medPension: 4000, pensCompleta: 7000, enOferta: true},
                    {ciudad: 'Mar del Plata', precio: 15000, medPension: 3500, pensCompleta: 6000, enOferta: true},
                    {ciudad: 'Ushuaia', precio: 28000, medPension: 6000, pensCompleta: 11000, enOferta: false},
                    {ciudad: 'Salta', precio: 19000, medPension: 3900, pensCompleta: 7200, enOferta: false},
                    {ciudad: 'San Luis', precio: 18000, medPension: 3700, pensCompleta: 6900, enOferta: true},]

// Variables Globales del cotizador

let opcDestino = ''
let cantPasajeros = 0
let cantDias = 0
let opcPension = 0
let continuar = true

// Funciones

function valorTotal() { // Devuelve el costo TOTAL del paquete turístico
    let acum = destino[opcDestino - 1].precio * cantDias * cantPasajeros 
    switch (opcPension) {
        case 1 : acum += destino[opcDestino - 1].medPension * cantDias * cantPasajeros; break;
        case 2 : acum += destino[opcDestino - 1].pensCompleta * cantDias * cantPasajeros; break;
    }
    return acum
}

function displayCotiz() { //Muestra la cotización --- Devuelve TRUE si continua o FALSE si debe salir
    continuar = Number(prompt('** COTIZACION REALIZADA **\n\n' + 
                                'El costo total del paquete turístico es : $ ' + valorTotal() + '\n\n' +
                                '1 - Volver al Menú PENSION\n' + 
                                '2 - Salir del Cotizador')) != 2
}

function menuPension(){ //Permite seleccionar si se van a incluir comidas en el paquete
    do {
        opcPension = Number(prompt('** MENU PENSION **\n\n' + 
                                    '1 - Media Pensión\n' +
                                    '2 - Pensión Completa\n' +
                                    '3 - Sin pensión\n' +
                                    '4 - Volver al Menú DIAS'))
        if (opcPension < 4) {
            displayCotiz() //Llamamos a la pantalla de Cotización
        }
    } while (opcPension != 4 && continuar)
}

function menuDias(){ //Permite seleccionar la cantidad de días del viaje
    do {
        cantDias = Number(prompt('** MENU DIAS **\n\n' + 
                                    'Ingrese la cantidad de días del viaje (máx. 21)\n' + 
                                    '(0) para volver al Menú PASAJEROS'))
        if ((cantDias  >= 1) && (cantDias <= 21)) {
            menuPension() //Llamamos al menú PENSION
        }
    } while (cantDias > 0 && continuar) 
}

function menuPasajeros(){ //Permite seleccionar la cantidad de pasajeros
    do {
        cantPasajeros = Number(prompt('** MENU PASAJEROS **\n\n' + 
                                        'Ingrese la cantidad de pasajeros (máx. 20)\n' + 
                                        '(0) para volver al Menú DESTINO'))
        if ((cantPasajeros  >= 1) && (cantPasajeros <= 20)) {
            menuDias() //Llamamos al menú DIAS
        }
    } while (cantPasajeros > 0 && continuar)
}

function menuDestino(){ //Permite elegir el destino del viaje
    let temp = ''
    destino.forEach((element, i) => {temp+=`${i + 1} - ${element.ciudad}\n` 
    });
    do {
        opcDestino = Number(prompt('** MENU DESTINO **\n\n' + temp +
                                    '7 - Volver al Menú PRINCIPAL'))
        if (opcDestino < 7) {
            menuPasajeros() //Llamamos al menú PASAJEROS
        }
    } while (opcDestino != 7 && continuar)
}

function displayPrices() { //Muestra los precios de los diferentes destinos
    let temp = ''
    destino.forEach(element => {temp += element.ciudad + ' $ ' + element.precio + '\n'
        
    });
    alert('** PRECIOS POR DIA Y POR PERSONA\n\n' + 
            ' -ALOJAMIENTO-\n' + temp)
}

function displayOffers() { //Muestra sólo los destinos con ofertas vigentes, filtrando por la propiedad "enOferta"
    let temp = ''
    destino.filter(element => element.enOferta).forEach(element => temp += element.ciudad + ' $ ' + element.precio + '\n');
    alert('\n***** OFERTAS IMPERDIBLES ***** \n\n' +
        'PRECIOS POR DIA Y POR PERSONA\n\n' + 
            ' -ALOJAMIENTO-\n' + temp)
}

function menuPrincipal(){ //Menú principal del cotizador
    alert('Bienvenido al Cotizador Interactivo\n' + 
            'de nuestra Agencia de Viajes \n')
    do {
        opcPrincipal = Number(prompt('** MENU PRINCIPAL **\n\n' + 
                                    '1 - Cotizar Viaje\n' +
                                    '2 - Ver Precios\n' +
                                    '3 - Ver Sólo Ofertas\n' +
                                    '4 - Salir'))
        switch (opcPrincipal) {
            case 1 : menuDestino(); break;
            case 2 : displayPrices(); break;
            case 3 : displayOffers(); break;
        }
    } while (opcPrincipal != 4 && continuar)
    alert('Gracias por utilizar nuestros servicios!')
}

// Inicio

// menuPrincipal() //Llamamos al Menú Principal del Cotizador

// Fin




let cotizaciones = []; //Inicializo el array de cotizaciones

const formulario = document.querySelector("#formulario");
const name = document.querySelector("#name");
const pax = document.querySelector("#pax");
const days = document.querySelector("#days");
const cotizList = document.querySelector("#cotizList");
const destinSelect = document.querySelector("#destinSelect");
const ownerName = document.querySelector("#ownerName");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const cotizacion = {
    destino: destino.value,
    owner: name.value,
    precio: price.value,
    dias: days.value,
  };
  crearCotizacion(cotizacion);
});

function crearCotizacion(cotiz) {
  cotizaciones.push(cotiz);
  verCotizaciones();
}

addEventListener("DOMContentLoaded", () => {
  verCotizaciones();
});



