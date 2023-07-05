
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#button")

    btn.addEventListener("click", () => {
        const data = fetch("expression.txt")
            .then(response => response.text())
            .then(data => {
                const p = document.createElement("p")
                p.textContent = data
                document.body.appendChild(p)
            })
    })
})