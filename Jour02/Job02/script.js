
function showhide() {
    const message = document.querySelector("article")
    console.log(message)
    if (message) {
        document.body.removeChild(message)
    }
    else {
        const message = document.createElement("article")
        message.textContent = "L'important n'est pas la chute, mais l'atterrissage."
        document.body.appendChild(message)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const trigger = document.querySelector("#button")
    trigger.addEventListener("click", showhide)

})