// Importa la función imprimir desde el archivo controles.js
import { imprimir } from "./controles.js";

// Selecciona el elemento HTML con el id "contenedor" para mostrar los elementos del servidor.
const areaDeImpresion = document.querySelector('#contenedor');

// Exporta la función "imprimir" para que esté disponible en otros módulos.
export function imprimir(arreglo) {
    // Llena el contenido del elemento "areaDeImpresión" con los elementos del arreglo.
    areaDeImpresion.innerHTML = arreglo.map((element) => {
        return `
        <div class="card">
        <h2>${element.rank}</h2>
        <h2>${element.name}</h2>
        <h2>${element.priceUsd.slice(0, 7)}</h2>
        </div>
        `;
    }).join("");
}

// Llama a la función "saludar".
saludar();

// Define la función "saludar" que muestra un mensaje en la consola.
function saludar() {
    console.log('saludar');
}