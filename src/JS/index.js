// Inserte el código aquí
const agregar = document.getElementById('agregar');
const contenedor = document.getElementById('tablero');

 agregar.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.getElementById('input');
    const texto = input.value.trim(); // Elimina espacios en blanco al inicio y al final

    if (texto !== '') {
        const nuevoParrafo = document.createElement('li');
        nuevoParrafo.textContent = texto;
        contenedor.appendChild(nuevoParrafo);
        input.value = ''; // Limpia el campo de entrada
        agregarBotonEliminar(nuevoParrafo); // Agrega el botón de eliminación
    }
});

function agregarBotonEliminar(liElement) {
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        contenedor.removeChild(liElement); // Elimina el elemento <li>
    });
    liElement.appendChild(botonEliminar);
}

    