// Importa la función imprimir desde el archivo controles.js
import { imprimir } from "./controles.js";

// Se define una variable "numero" para almacenar el número elegido por el usuario.
// Se utiliza el prompt para que el usuario ingrese un número del 1 al 10.
// Se convierte el valor del prompt en un número utilizando la función Number.
const numero = Number(prompt('Elige un número del 1 al 10: '));

// Espera a que todo el contenido del documento HTML esté completamente cargado antes de ejecutar la función cargarInfo.
document.addEventListener('DOMContentLoaded', cargarInfo);

// Se crea una función asincrónica para consultar información de un servidor, en este caso, la API implementada.
async function cargarInfo() {
    // Realiza una solicitud HTTP para obtener datos de la API.
    const respuesta = await fetch('https://api.coincap.io/v2/assets');
    // Convierte la respuesta en formato JSON.
    const respuestaLimpia = await respuesta.json();
    // Obtiene un subconjunto de datos del arreglo de respuesta, limitado por el número elegido por el usuario.
    const newArreglo = respuestaLimpia.data.slice(0, numero);
    // Llama a la función imprimir con el nuevo arreglo de datos.
    imprimir(newArreglo); 
}