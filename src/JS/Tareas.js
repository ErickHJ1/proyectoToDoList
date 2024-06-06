//Tareas.js
async function obtenerTareasDelServidor(texto) {
    try {
        const response = await fetch('http://localhost:3000/api/task');
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }
        const taskList = await response.json();
        console.log('Tareas recibidas:', taskList);

    } catch (error) {
        console.error('Error al obtener las tareas:', error);
    }
}


export { obtenerTareasDelServidor };