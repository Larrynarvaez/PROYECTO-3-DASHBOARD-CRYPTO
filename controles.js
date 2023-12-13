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


export function graficar(arreglo){
    const ctx = document.getElementById('myChart');

    
    const labels = arreglo.map(element => element.id)
    const info = arreglo.map(element => element.priceUsd)

    new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            label: 'Ranking Crypto',
            data: info,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
}