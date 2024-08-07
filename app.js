function teste() {
    // var temp = document.getElementById("select").value

    var tempInput = parseFloat(document.getElementById("input-ent").value) // valor digitado no input
    var inputRadio = document.querySelector('input[name = "input-radio"]:checked').value // pega o valor do input-radio marcado

    var tempSelect = document.getElementById("select").value // pega a opção selecionada no select

    var p = document.getElementById("saida")

    switch (tempSelect) {
        case ('c'): // VALOR do input para CELSIUS
            if (inputRadio === "c") { // convertendo DE celsius para celsius
                p.innerHTML = tempInput

            } else if (inputRadio === "f") { // convert.  DE fahrenheith para celsius
                var res = (tempInput - 32) / 1.8
                p.innerHTML = res.toFixed(1)

            } else if (inputRadio === "k") { // convert. DE kelvin para celsius
                var res = (tempInput - 273.15)
                p.innerHTML = res.toFixed(1)
            }
            break;



        case ('f'): // VALOR do input para FAHREN.
            if (inputRadio === "c") { // convert. DE celsius para FAHREN.
                var res = (tempInput * 1.8) + 32
                p.innerHTML = res.toFixed(1)
            
            } else if (inputRadio === "f") { // convert. DE FAHREN. para FAHREN.
                p.innerHTML = tempInput


            } else if (inputRadio === "k") { // convert. DE Kelvin para FAHREN.
                var res = (tempInput - 273.15) * 9/5 
                var resDois = res + 32
                p.innerHTML = resDois.toFixed(1)
            }
        

            break;

            case ('k'):
                if (inputRadio === "c") { // convert. DE celsius para kelvin.
                    var res = tempInput + 273.15
                    p.innerHTML = res.toFixed(1)
               
                } else if (inputRadio === "f") { // convert. DE FAHREN. para kelvin.
                    var res = (tempInput - 32) / 9 * 5
                    var resDois = res + 273
                    p.innerHTML = resDois.toFixed(1)

                } else if (inputRadio === "k") { // convert. DE kelvin para kelvin. 
                    p.innerHTML = tempInput
                    
                }

                break;

        

    }








}


function images() { // função que muda a imagem do resultado a depender do resultado da conversão

}




function reiniciar() {
    
    var p = document.getElementById("saida")

     p.innerHTML = ""
     console.log("chamou")


}




//     switch (temp) {
//         case ("c"):
//             var res = (input * 1.8) + 38;
//             console.log(res)
//         break;
        
//         case ("f"):
//             var res = (input)
//             // console.log("fahrenheit")
//             break;
        
//         case ("k"):
//             // console.log("kelvin");
//             break;
//     }
// }






// function teste2() {
    
//     var teste = document.querySelector('input[name = "input-radio"]:checked').value
    
//     if (teste == "c") {
//         console.log("celsius")
//     } else if (teste == "f") {
//         console.log("fah")
//     } else if (teste == "k") {
//         console.log("kelvin")
//     }
// }