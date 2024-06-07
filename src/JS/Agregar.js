// Inserte el código aquí
//Agregar.js
import { borrarTarea } from "./index3";
import { obtenerTareasDelServidor } from "./Tareas";
import { getFuncion } from "./Get";
// Obtiene los elementos del HTML
const agregar = document.getElementById('agregar');
const contenedor = document.getElementById('tablero');
const contadorElemento = document.getElementById('contador');
export const lista = document.getElementById('lista')
export const texto = input.value.trim();

// Contador de tareas completadas
let contador = 0;

// Agregar texto
agregar.addEventListener('click', async (e) => {
    e.preventDefault();
tomarTarea()
});

// Agrega el botón para eliminar
function agregarBotonEliminar(liElement) {
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        borrarTarea()
        contenedor.removeChild(liElement);
        if (contador >0) {
            contador--; // Resta 1 al contador cuando se hace clic en el botón "Eliminar"
            contadorElemento.textContent = "Tareas Completadas: " + contador;
        }
    });

    liElement.appendChild(botonEliminar);
}

window.addEventListener('load', async () => {
obtenerTareasDelServidor()
});

input.addEventListener('keypress', async(evt) => {
    if (evt.key === 'Enter') {
   tomarTarea() }})
async function tomarTarea() {
    const traerFuncion = getFuncion(lista)
    const input = document.getElementById('input');
    const texto = input.value.trim();

    if (texto !== '') {
        const nuevoParrafo = document.createElement('li');
        nuevoParrafo.textContent = texto;

        // Agregar checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
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