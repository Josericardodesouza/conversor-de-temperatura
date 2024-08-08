


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




function texto() { // função que muda a imagem do resultado a depender do resultado da conversão
    
    var p = document.getElementById("saida").innerText
    var tempSelect = document.getElementById("select").value
    var frase = document.getElementById("p-frase")
    var section = document.getElementById("secao-saida")

    console.log("teste")

    switch (tempSelect) {
        case ('c'): // caso a conversão foi para celsius
            if (p < 1) {
                frase.innerHTML = "Muito frio"
                section.style.backgroundImage = "url(images/pexels-pixabay-358235.jpg)"


            } else if (p > 1 && p < 10) {
                frase.innerHTML = "frio"
                section.style.backgroundImage = "url(images/pexels-emmanuel-codden-1502600-17169274.jpg)"


            } else if (p > 10 && p < 20) {
                frase.innerHTML = "Ameno"
                section.style.backgroundImage = "url(images/pexels-sherissa-r-704096.jpg)"

            } else if (p > 20 && p < 30) {
                frase.innerHTML = "quente"
                section.style.backgroundImage = "url(images/pexels-viniciusvieirafotografia-2559997.jpg)"

            } else if (p > 30) {
                frase.innerHTML = "Muito quente"
                section.style.backgroundImage = "url(images/pexels-mark-neal-201020-3061495.jpg)"
                
            }

            break;

        case ('f'):
            if (p < 32) {
                frase.innerHTML = "Muito frio"
                  section.style.backgroundImage = "url(images/pexels-pixabay-358235.jpg)"

            } else if (p > 32 && p < 60) {
                frase.innerHTML = "Frio"

            } else if (p > 60 && p < 77 ) {
                frase.innerHTML = "ameno"

            } else if (p > 77 && p < 95) {
                frase.innerHTML = "quente"

            } else if (p > 95) {
                frase.innerHTML = "Muito quente"
            }

            break;

        case ('k'):
            if (p < 273) {
                frase.innerHTML = "Muito frio"
                  section.style.backgroundImage = "url(images/pexels-pixabay-358235.jpg)"

            } else if (p > 273 && p < 288) {
                frase.innerHTML = "frio"

            } else if (p > 288 && p < 298) {
                frase.innerHTML = "ameno"

            } else if (p > 298 && p < 308) {
                frase.innerHTML = "quente"

            } else if (p > 308) {
                frase.innerHTML = "Muito quente"

            }

            break;


    }

}




function reiniciar() {
    
    var p = document.getElementById("saida")
    var input = document.getElementById("input-ent")

     p.innerHTML = ""
     input.value = ""

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