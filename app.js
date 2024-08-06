function teste() {
    var temp = document.getElementById("select").value

    switch (temp) {
        case ("c"):
            console.log("celsius")
        break;
        
        case ("f"):
            console.log("fahrenheit")
            break;
        
        case ("k"):
            console.log("kelvin");
            break;
    }
}