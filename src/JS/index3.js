//index3.js

async function borrarTarea(id) {
    try {
        const response = await fetch (`http://localhost:3000/api/task/${id}`,{
            method: "DELETE"
    })
    if (!response.ok) {
        throw new Error("Algo salio mal")
    }
    const data = await response.json()
    console.log(data)
}
    catch (error) {
        console.log(error)
    }
}

export {borrarTarea}