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

const pensionTxt = ["Media Pensión", "Pensión Completa", "No incluye Pensión"] //Textos de las CARDs

// Variables de Acceso al DOM
const formulario = document.querySelector("#formulario");
const pax = document.querySelector("#pax");
const days = document.querySelector("#days");
const cotizList = document.querySelector("#cotizList");
const destinSelect = document.querySelector("#destinSelect");
const pensionSelect = document.querySelector("#pensionSelect");
const ownerName = document.querySelector("#owner-name");
let btnBorrarUna = document.getElementById("btnBorrarUna")
let btnBorrarTodas = document.getElementById("btnBorrarTodas")

let cotizaciones; // ARRAY donde se guardarán todas las cotizaciones realizadas

// Funciones usadas en el programa

function calcular() { // Devuelve el costo TOTAL del paquete turístico
    let acum = destinos[destinSelect.value].precio * days.value * pax.value
        switch (pensionSelect.value) { //Agrega los valores de pensión completa o media pensión, si corresponde
            case "0" : acum += destinos[destinSelect.value].medPension * days.value * pax.value; break;
            case "1" : acum += destinos[destinSelect.value].pensCompleta * days.value * pax.value; break;
        }
    return acum
}

function crearCotizacion(cotiz) { //agrega la cotización en pantalla al ARRAY de Cotizaciones
    cotizaciones.push(cotiz);
    renderizarCotizaciones(); //Llamo a la función que me muestra TODO el Array de Cotizaciones
}

function armarSelect() { //Arma el SELECT de DESTINOS
    destinSelect.innerHTML = `<option value="" disabled selected>Seleccione un destino</option>`;
    destinos.forEach((destino) => { //Del Array de Destinos, sólo toma ID y Ciudad
    const { ciudad, id } = destino;
    destinSelect.innerHTML += `
    <option value="${id}">${ciudad}</option>`;
    });
}

function renderizarCotizaciones() {
    cotizList.innerHTML = "";
    cotizaciones.forEach((coti) => { // Recorro el Array de Cotizaciones
        const { destino, dias, precio, pax, pension, promo } = coti;
        const oferta = promo ? "PROMOCIÓN !" : "" //Agrego "PROMOCIÓN" a los destinos que tienen la propiedad enOferta=TRUE
        // Armado del HTML de la CARD de la cotización actual
        cotizList.innerHTML += `
        <div class="cotiz-card">
        <h3 class="cotiz-destin">${destinos[destino].ciudad}</h3>` +
        `<h4 class="cotiz-price">TOTAL $ ${precio}  </h4>
        <h5 class="cotiz-price">  ${oferta}</h5>
        <p class="cotiz-days">${dias} dias</p>
        <p class="cotiz-pax">${pax} pasajeros</p>
        <p class="cotiz-pension">${pensionTxt[pension]}</p>
        <button class="btn-primary">Reservar</button>
        </div>
        `; 
    });
}

function leerStorage(){
    if (localStorage.getItem('cotiz')){ // Controlo que exista "cotiz" en el localStorage
        cotizaciones = JSON.parse(localStorage.getItem('cotiz')) // Leo el ARRAY desde el localStorage(JSON) y lo convierto a Array de Objetos
    } else {
        cotizaciones = []; // Si no encuentro "cotiz" en localStorage, inicializo el array VACIO
    }
}

// INICIO del Código

leerStorage() //Chequeo el localStorage
armarSelect() //Llamo a la función que arma la lista de DESTINOS

formulario.addEventListener("submit", (e) => { //Acciones del Boton "GENERAR COTIZACION"
    e.preventDefault(); //Anulo la recarga automática de la página
    const cotizacion = {destino: destinSelect.value, owner: ownerName.value, pax: pax.value, precio: calcular(), 
        dias: days.value, pension: pensionSelect.value, promo: destinos[destinSelect.value].enOferta}; //Armo la cotización
    crearCotizacion(cotizacion); //Agrego la Cotización al ARRAY de Cotizaciones
    //Guardo el ARRAY de Cotizaciones en localStorage, convirtiéndolo a JSON
    localStorage.setItem('cotiz', JSON.stringify(cotizaciones)) 
});

addEventListener("DOMContentLoaded", () => renderizarCotizaciones()) //Inicia mostrando las cotizaciones grabadas en localStorage

btnBorrarUna.addEventListener("click", () => {  //Handler BOTON Borrar ultima cotizacion
    cotizaciones.pop(); // Elimino la última cotización ingresada al array de cotizaciones
    localStorage.setItem('cotiz', JSON.stringify(cotizaciones)) //Actualizo el ARRAY de Cotizaciones en localStorage (JSON)
    renderizarCotizaciones(); // Actualizo los cambios
})

btnBorrarTodas.addEventListener("click", () => { //Handler BOTON Borrar todas
    cotizaciones = []; // Limpio el array de cotizaciones
    localStorage.setItem('cotiz', JSON.stringify(cotizaciones)) //Actualizo el ARRAY de Cotizaciones en localStorage (JSON)
    renderizarCotizaciones(); // Actualizo los cambios
})

// FIN del código
