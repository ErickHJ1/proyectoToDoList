async function getFuncion(texto) {
    const respuesta = await fetch('http://localhost:3000/api/task',{    
    method: "GET",
    headers: {
        "Content-type": "application/json"
    }
    })
try {
    let lista = await respuesta.json()
    const tarea = document.createElement("h2")
    const checkbox = document.createElement("input")
    const p = document.createElement("label")
    const borrar = document.createElement('button')
    borrar.textContent = "Eliminar"
    borrar.className = "botonBorrar"
    checkbox.type = "checkbox"
    checkbox.classList = "check"
    p.innerHTML = element.tarea
    lista.className = "tareas"
    lista.appendChild("checkbox")
    lista.appendChild('p')
    li.appendChild(borrar)
    borrar.addEventListener('click', () => {
        alert("skibidi")
        deleteData(element.id)
    })

} catch (error) {
    console.log(error)
}

}

getFuncion()