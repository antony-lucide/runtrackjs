var nombre = 0
function addone(nombre) {
    let  count  = document.querySelector("#compteur")
    count.textContent = nombre+1
    return nombre + 1
    
}

document.addEventListener("DOMContentLoaded",() => {
    const trigger = document.querySelector("#button")
    trigger.addEventListener("click",() => {
        nombre = addone(nombre)
    })

})