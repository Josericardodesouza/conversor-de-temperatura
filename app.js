


function teste() {
    // var temp = document.getElementById("select").value

    var tempInput = parseFloat(document.getElementById("input-ent").value) // valor digitado no input
    var pGraus = document.getElementById("p-graus")
    var inputRadio = document.querySelector('input[name = "input-radio"]:checked').value // pega o valor do input-radio marcado

    var tempSelect = document.getElementById("select").value // pega a opção selecionada no select

    document.getElementById("btn-converter").style.display = "none"
    document.getElementById("btn-reiniciar").style.display = "block"


    var p = document.getElementById("saida")

    var sectionRes = document.getElementById("section-saida")

    if (tempInput != "") {
        
    sectionRes.style.display = 'flex'

    } else {
        sectionRes.style.display = 'none'
    }




    switch (tempSelect) {
        case ('c'): // VALOR do input para CELSIUS
            if (inputRadio === "c") { // convertendo DE celsius para celsius
                p.innerHTML = tempInput.toFixed(1)
                pGraus.innerHTML = " ºC"
                
              

            } else if (inputRadio === "f") { // convert.  DE fahrenheith para celsius
                var res = (tempInput - 32) / 1.8
                p.innerText = res.toFixed(1) 
                pGraus.innerHTML = " ºF"

            } else if (inputRadio === "k") { // convert. DE kelvin para celsius
                var res = (tempInput - 273.15)
                p.innerText = res.toFixed(1) 
                pGraus.innerHTML = " K"
            }
            break;



        case ('f'): // VALOR do input para FAHREN.
            if (inputRadio === "c") { // convert. DE celsius para FAHREN.
                var res = (tempInput * 1.8) + 32
                p.innerHTML = res.toFixed(1) 
                pGraus.innerHTML = " ºC"
            
            } else if (inputRadio === "f") { // convert. DE FAHREN. para FAHREN.
                p.innerHTML = tempInput.toFixed(1) 
                pGraus.innerHTML = " ºF"


            } else if (inputRadio === "k") { // convert. DE Kelvin para FAHREN.
                var res = (tempInput - 273.15) * 9/5 
                var resDois = res + 32
                p.innerHTML = resDois.toFixed(1)
                pGraus.innerHTML = " K"
            }
        

            break;

            case ('k'):
                if (inputRadio === "c") { // convert. DE celsius para kelvin.
                    var res = tempInput + 273.15
                    p.innerHTML = res.toFixed(1) 
                     pGraus.innerHTML = " ºC"
               
                } else if (inputRadio === "f") { // convert. DE FAHREN. para kelvin.
                    var res = (tempInput - 32) / 9 * 5
                    var resDois = res + 273
                    p.innerHTML = resDois.toFixed(1)
                    pGraus.innerHTML = " ºF"


                } else if (inputRadio === "k") { // convert. DE kelvin para kelvin. 
                    p.innerHTML = tempInput.toFixed(1)
                     pGraus.innerHTML = " K"
                    
                }

                break;

                default:
                    p.innerHTML = "inválido"
        

    }

    sectionRes.scrollIntoView({behavior: 'smooth'})

}




function texto() { // função que muda a imagem do resultado a depender do resultado da conversão
    
    var p = document.getElementById("saida").innerText
    var numTemp = document.getElementById("saida")
    var pGraus = document.getElementById("p-graus")
    var tempSelect = document.getElementById("select").value
    var frase = document.getElementById("p-frase")
    var img = document.getElementById("imgSaida")

    var corMf = "#12106f"
    var corFrio = "#9B9ECE"
    var corAmeno = "#90E39A"
    var corQuente = "#FB8B24"
    var corMq = "#E36414"
    


    console.log("teste")

    switch (tempSelect) {
        case ('c'): // caso a conversão foi para celsius
            if (p < 1) {
                
                frase.innerHTML = "Muito frio"
                img.setAttribute('src' ,'images/pexels-pixabay-358235.jpg')
                numTemp.style.color = corMf
                pGraus.style.color = corMf
              
            
                


            } else if (p > 1 && p < 10) {
                frase.innerHTML = "Frio"
                numTemp.style.color = corFrio
                pGraus.style.color = corFrio
                img.setAttribute('src', 'images/pexels-emmanuel-codden-1502600-17169274.jpg')
             

            } else if (p > 10 && p < 20) {
                frase.innerHTML = "Ameno"
                numTemp.style.color = corAmeno
                pGraus.style.color = corAmeno
                img.setAttribute('src', 'images/pexels-sherissa-r-704096.jpg')


            } else if (p > 20 && p < 30) {
                frase.innerHTML = "Quente"
                numTemp.style.color = corQuente
                pGraus.style.color = corQuente
                img.setAttribute('src', 'images/pexels-viniciusvieirafotografia-2559997.jpg')

            } else if (p > 30) {
                frase.innerHTML = "Muito quente"
                numTemp.style.color = corMq
                pGraus.style.color = corMq
            
                img.setAttribute('src', 'images/pexels-mark-neal-201020-3061495.jpg')
                
            }

            break;

        case ('f'):
            if (p < 32) {
                frase.innerHTML = "Muito frio"
                numTemp.style.color = corMf
                pGraus.style.color = corMf
                img.setAttribute('src' ,'images/pexels-pixabay-358235.jpg')
             

            } else if (p > 32 && p < 60) {
                frase.innerHTML = "Frio"
                numTemp.style.color = corFrio
                pGraus.style.color = corFrio
                img.setAttribute('src', 'images/pexels-emmanuel-codden-1502600-17169274.jpg')

                

            } else if (p > 60 && p < 77 ) {
                frase.innerHTML = "Ameno"
                numTemp.style.color = corAmeno
                pGraus.style.color = corAmeno
                img.setAttribute('src', 'images/pexels-sherissa-r-704096.jpg')

            } else if (p > 77 && p < 95) {
                frase.innerHTML = "Quente"
                numTemp.style.color = corQuente
                pGraus.style.color = corQuente
                img.setAttribute('src', 'images/pexels-viniciusvieirafotografia-2559997.jpg')
            

            } else if (p > 95) {
                frase.innerHTML = "Muito quente"
                numTemp.style.color = corMq
                pGraus.style.color = corMq
                img.setAttribute('src', 'images/pexels-mark-neal-201020-3061495.jpg')
            }

            break;

        case ('k'):
            if (p < 273) {
                frase.innerHTML = "Muito frio"
                numTemp.style.color = corMf
                pGraus.style.color = corMf
                img.setAttribute('src' , 'images/pexels-pixabay-358235.jpg')

            } else if (p > 273 && p < 288) {
                frase.innerHTML = "Frio"
                numTemp.style.color = corFrio
                pGraus.style.color = corFrio
                frase.setAttribute('style', 'color: green')

            } else if (p > 288 && p < 298) {
                frase.innerHTML = "Ameno"
                numTemp.style.color = corAmeno
                pGraus.style.color = corAmeno
                img.setAttribute('src', 'images/pexels-sherissa-r-704096.jpg')

            } else if (p > 298 && p < 308) {
                frase.innerHTML = "Quente"
                numTemp.style.color = corQuente
                pGraus.style.color = corQuente
                img.setAttribute('src', 'images/pexels-viniciusvieirafotografia-2559997.jpg')

            } else if (p > 308) {
                frase.innerHTML = "Muito quente"
                numTemp.style.color = corMq
                pGraus.style.color = corMq
                img.setAttribute('src', 'images/pexels-mark-neal-201020-3061495.jpg')

            }

            break;


    }

}




function reiniciar() {

    var top = document.getElementById("tituloh2")
    var p = document.getElementById("saida")
    var input = document.getElementById("input-ent")
    var section = document.getElementById("section-saida")

     p.innerHTML = ""
     input.value = ""
     section.style.display = "none"
      document.getElementById("btn-converter").style.display = "block"
    document.getElementById("btn-reiniciar").style.display = "none"


     console.log("chamou")

     top.scrollIntoView({behavior: "smooth"})


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