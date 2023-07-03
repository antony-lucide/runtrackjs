
$(document).ready(function () {
    let  image = $(".img").draggable()   
    
    $("button").click(function() {
        if($(".img").draggable == $(".img") ) {
            return true
            message = $("p").prepend("Vous avez gagné")
        }
        else if($(".img").draggable == undefined){
            return false
            message = $("p").prepend("vous avez perdue")
        }
    })
})
