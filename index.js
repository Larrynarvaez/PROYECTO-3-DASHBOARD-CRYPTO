const areaDeImpresion = document.querySelector('#contenedor')


document.addEventListener('DOMContentLoaded',cargarInfo)

function cargarInfo (){
    console.log('Cargando info')
}

async function cargarInfo(){
    const respuesta = await fetch('https://api.coincap.io/v2/assets');
    const respuestaLimpia = await respuesta.json() 
    const newArreglo = respuestaLimpia.data.slice(0,10)
    imprimir(newArreglo)
}

function imprimir(arreglo){ 
    areaDeImpresion.innerHTML = arreglo.map((element)=>{
        return `
        <div class="card">
        <h2>${element.rank}</h2>
        <h2>${element.name}</h2>
        <h2>${element.priceUsd.slice(0,7)}</h2>
        </div>
        `
    }).join("") 
}

