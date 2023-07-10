const mdp = document.querySelector("#password")

function lenght() {
    if(mdp.lenght > 8){
        const message = document.createElement("h1")
        message.textContent("mot de passe trop court")
        document.body.append(message)
        return true
    }
    else{
        const message_error = document.createElement("h2")
        message_error.textContent("mot de passe valide")
        document.body.append(message_error)
        return false
    }
}


function verification(){
    if(mdp.toUpperCase() == 0 && mdp.toLowerCase == 0()) {
        const majuscule = document.createElement("h1")
        majuscule.textContent("Pas de majuscule")
        document.body.append(majuscule)
        return true
    }
    else {
        const réussi = document.createElement("h1")
        réussi.textContent("mot de passe correct")
        document.body.append(réussi)
        return false
    }
}


function emptyfield() {
    if(!mdp){
        const result = document.createElement("p")
        result.textContent("Mot de passe  renseigné")
        document.body.append(result)
        return true
    }
    else if(mdp === ""){
        const empt_field = document.createElement("p")
        empt_field.textContent("Mot de passe non renseignée")
        document.body.append(empt_field)
        return false 
    }
}

document.addEventListener("DOMContentLoaded",() => {
    const  btn = document.querySelector(".envoyer")
    btn.addEventListener("click", () => {
        verification()
        lenght()
        empt_field()
    })
})