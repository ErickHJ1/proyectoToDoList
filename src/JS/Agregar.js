// Inserte el código aquí
//Agregar.js
import { borrarTarea } from "./index3";
import { obtenerTareasDelServidor } from "./Tareas";
import { getFuncion } from "./Get";

// Obtiene los elementos del HTML
const agregar = document.getElementById('agregar');
const contenedor = document.getElementById('tablero');
const contadorElemento = document.getElementById('contador');
export const lista = document.getElementById('lista');

// Contador de tareas completadas
let contador = 0;

// Agregar texto
agregar.addEventListener('click', async (e) => {
    e.preventDefault();
    tomarTarea();
});

// Agrega el botón para eliminar
function agregarBotonEliminar(liElement) {
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        borrarTarea();
        contenedor.removeChild(liElement);
        if (liElement.querySelector('input[type="checkbox"]').checked) {
            contador--;
            contadorElemento.textContent = "Tareas Completadas: " + contador;
        }
    });

    liElement.appendChild(botonEliminar);
}

window.addEventListener('load', async () => {
    obtenerTareasDelServidor();
    restaurarEstadoCheckbox(); // Restaurar estado de la casilla de verificación al cargar la página
});

input.addEventListener('keypress', async(evt) => {
    if (evt.key === 'Enter') {
        tomarTarea();
    }
});

async function tomarTarea() {
    const input = document.getElementById('input');
    const texto = input.value.trim();

    if (texto !== '') {
        const nuevoParrafo = document.createElement('li');
        nuevoParrafo.textContent = texto;

        // Agregar checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', async () => {
            try {
                // Actualizar estado de la tarea en el servidor
                const response = await fetch(`http://localhost:3000/api/task/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ completed: checkbox.checked })
                });
                if (!response.ok) {
                    throw new Error('Error al actualizar el estado de la tarea');
                }
                // Actualizar contador si la tarea se marca como completada
                if (checkbox.checked) {
                    contador++;
                } else {
                    contador--;
                }
                contadorElemento.textContent = "Tareas Completadas: " + contador;
                guardarEstadoCheckbox(texto, checkbox.checked); // Guardar estado de la casilla de verificación
            } catch (error) {
                console.error('Error al actualizar la tarea:', error);
            }
        });

        nuevoParrafo.appendChild(checkbox);
        contenedor.appendChild(nuevoParrafo);
        input.value = '';

        agregarBotonEliminar(nuevoParrafo);

        // Enviar datos al servidor
        try {
            const response = await fetch('http://localhost:3000/api/task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ taskName: texto, completed: false })
            });
            if (!response.ok) {
                throw new Error('Error al enviar los datos');
            }
            const data = await response.json();
            console.log('Tarea enviada:', data);
        } catch (error) {
            console.error('Error al enviar la tarea:', error);
        }
    }
}

// Función para guardar el estado de la casilla de verificación en el almacenamiento local
function guardarEstadoCheckbox(taskName, completed) {
    const estadoTareas = JSON.parse(localStorage.getItem('estadoTareas')) || {};
    estadoTareas[taskName] = completed;
    localStorage.setItem('estadoTareas', JSON.stringify(estadoTareas));
}

// Función para restaurar el estado de la casilla de verificación al cargar la página
function restaurarEstadoCheckbox() {
    const estadoTareas = JSON.parse(localStorage.getItem('estadoTareas')) || {};
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        const taskName = checkbox.parentElement.textContent.trim();
        if (estadoTareas[taskName]) {
            checkbox.checked = true;
        }
    });
}
getFuncion()