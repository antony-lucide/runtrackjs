
$(document).ready(function (){

    let paragraphe = $("<p></p>").text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit,ensuite, on prie.")

    $("#add").click(function() {
        if ($("p").length) {
            paragraphe.toggle()
        }
        else {
            $("body").append(paragraphe)
        }
    })
})

