function Message() {
    const Citation = document.querySelector("#citation")
    console.log(Citation.textContent)
}

document.addEventListener("DOMContentLoaded",() => {
    const trigger = document.querySelector("#button")

    trigger.addEventListener("click", Message)

})