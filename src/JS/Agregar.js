// Inserte el código aquí
// Obtiene los elementos del HTML
const agregar = document.getElementById('agregar');
const contenedor = document.getElementById('tablero');
const contadorElemento = document.getElementById('contador');

// Contador de tareas completadas
let contador = 0;

// Agregar texto
agregar.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.getElementById('input');
    const texto = input.value.trim();

    if (texto !== '') {
        const nuevoParrafo = document.createElement('li');
        nuevoParrafo.textContent = texto;

        // Agregar checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                contador++;
            } else if (contador > 0) { // Solo disminuir si el contador es mayor que cero
                contador--;
            }
            contadorElemento.textContent = "Tareas Completadas: " + contador;
        });

        nuevoParrafo.appendChild(checkbox);
        contenedor.appendChild(nuevoParrafo);
        input.value = '';

        agregarBotonEliminar(nuevoParrafo);
    }
});

// Agrega el botón para eliminar
function agregarBotonEliminar(liElement) {
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        contenedor.removeChild(liElement);
        if (contador >0) {
            contador--; // Resta 1 al contador cuando se hace clic en el botón "Eliminar"
            contadorElemento.textContent = "Tareas Completadas: " + contador;
        }
    });

    liElement.appendChild(botonEliminar);
}
//Exporta agregar y agregarBotonEliminar
export{agregar, agregarBotonEliminar, }