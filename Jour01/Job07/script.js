function jourtravaille(datestring) {

    const date = new Date(datestring)
    console.log(date)
    if(date.getDate() === 1 && date.getMonth() === 1) {
        console.log(datestring + " est un jour férié")
    }
    else if(isNaN(date)) {
        console.log("Pas de date")
    }
}

jourtravaille("2021-03-25") 