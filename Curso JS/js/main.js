
siguiente = prompt("Gracias por entrar a nuestra pagina. Escriba OK para continuar")
while(siguiente != "OK"){
    alert("Ingrese OK para continuar")
    siguiente = prompt("Escriba OK para continuar")
}

do{
    numero = prompt("Ingrese un numero del 1 al 5 para obtener su serie")
    if(numero > 5){
        alert("Ingrese un numero del 1 al 5 por favor. Gracias.")
        numero = prompt("Ingrese un numero del 1 al 5 para obtener su serie")
        if(numero > 5){
            alert("Relogea la pagina por no poner un numero del 1 al 5 :)")
        }
    }
    if(numero == 1){
        alert("Suits: 9 temporadas, la podes encontrar en netflix.")
        break
    }

    if(numero == 2){
        alert("Peaky Blinders: 6 temporadas, la podes encontrar en netflix.")
        break
    }

    if(numero == 3){
        alert("The Walking Dead: 10 temporadas, la podes encontrar en netflix.")
        break
    }

    if(numero == 4){
        alert("Breaking Bad: 5 temporadas, la podes encontrar en netflix")
        break
    }

    if(numero == 5){
        alert("Better call saul: 6 temporadas, la podes encontrar en netflix")
        break
    }
    
} while (numero <= 5){
    alert("ESPERO QUE TE HAYA GUSTADO")
}

do{
    peliplus = prompt("Ingrese 'PELI' para una recomendacion plus o 'ESC' para finalizar")
        if (peliplus == "PELI"){
        alert("Top gun 1 y top gun maverick, ambas estan en star+")
        break
        }

        if (peliplus == "ESC"){
        alert("Gracias")
        break
        }
} while (peliplus == "PELI" , "ESC"){
    alert("Ahora si, espero que te haya gustado. Te dejo una encuesta para valorar la pagina")
}

var vista = parseInt(prompt("Del 1 al 5 q probabilidad hay de que veas la recomendacion"))
while (vista > 5){
    alert("Del 1 al 5 q probabilidad hay de que veas la recomendacion")
    vista = parseInt(prompt("Del 1 al 5 q probabilidad hay de que veas la recomendacion"))
}
var originalidad = parseInt(prompt("Del 1 al 5 cuanta originalidad tuvo la pagina"))
while (originalidad > 5){
    alert("Del 1 al 5 cuanta originalidad tuvo la pagina")
    originalidad = parseInt(prompt("Del 1 al 5 cuanta originalidad tuvo la pagina"))
}
var nota = vista + originalidad
console.log(nota)







º