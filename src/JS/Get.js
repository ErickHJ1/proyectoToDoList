import { lista } from "./Agregar";
import { borrarTarea } from "./index3";
import { texto } from "./Agregar";
export async function getFuncion() {
    const respuesta = await fetch('http://localhost:3000/api/task',{    
    method: "GET",
    headers: {
        "Content-type": "application/json"
    }
    })
try {
   
    let listar = await respuesta.json()
    lista.innerHTML = ""
    listar.forEach(element => {
        const li = document.createElement("li")
        const checkbox = document.createElement("input")
        const p = document.createElement("p")
        const borrar = document.createElement('button')
        const borar = document.createElement('button')
        borrar.textContent = "Eliminar"
        borrar.className = "botonBorrar"
        checkbox.type = "checkbox"
        checkbox.classList = "check"
        p.innerHTML = element.taskName
        li.appendChild(checkbox)
        li.appendChild(p)
        li.appendChild(borrar)
        lista.appendChild(li)
        borrar.addEventListener('click', () => {
            borrarTarea(element.id)
        })//checkbox.checked = true
    });

} catch (error) {
    console.log(error)
}

}

getFuncion()

async function put() {
    
}