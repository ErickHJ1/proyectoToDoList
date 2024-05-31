// Inserte el código aquí
const agregar = document.getElementById('agregar')

agregar.addEventListener('click',(e) => {
    e.preventDefault()
    const input = document.getElementById('input');
    const texto = input.value;
    if (texto !== '') { // Verifica que no sea un campo vacío
        const contenedor = document.getElementById('tablero');
        const nuevoParrafo = document.createElement('li');
        nuevoParrafo.textContent = texto;
        contenedor.appendChild(nuevoParrafo);
        
        // Limpia el campo de entrada
        input.value = '';
    }
    
    }) 
async function eliminar() {
    let esperar = await agregar()
    return console.log(agregar())
}

