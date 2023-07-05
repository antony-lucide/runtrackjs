    function jsonkey(str,key) {
        const résultat  = JSON.parse(str)
        return résultat[key]
    }

document.addEventListener("DOMContentLoaded", () => {
    const  str = '{ "name": "La Plateforme_",  "address": "8 rue dhozier", "city": "Marseille",  "nb_staff": "11",  "creation":"2019" }'
    console.log(jsonkey(str,'city'))
})