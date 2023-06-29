
document.addEventListener("DOMContentLoaded",() => {
    const textarea = document.querySelector("#keylogger")


    document.addEventListener("keydown",(event) => {

        textarea.value += event.key
    })

})