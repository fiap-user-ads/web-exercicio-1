
const valorContador = document.getElementById('value')
const aumentar = document.getElementById('aumentar')
const diminuir = document.getElementById('diminuir')

let counter = 0

function setCounter(type) {
  if(type === aumentar) {
    counter = counter + 1
  } else {
    counter = counter - 1
  }

  valorContador.innerHTML = counter
}

aumentar.addEventListener('click', () => setCounter(aumentar))
diminuir.addEventListener('click', () => setCounter(diminuir))