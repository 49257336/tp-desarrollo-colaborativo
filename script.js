let votos = 0

const boton = document.getElementById("votar")
const textoVotos = document.getElementById("contador")

boton.addEventListener("click", function(){

votos = votos + 1

textoVotos.innerText = "Votos: " + votos

})


const form = document.getElementById("formPropuesta")

const mensj = document.getElementById("mensaje")

form.addEventListener("submit", function(e){
    e.preventDefault()

let nombre = document.getElementById("nombre").value
let idea = document.getElementById("idea").value

if(nombre == "" || idea == ""){

mensj.innerText = "Completa todos los campos"

}else{
    mensj.innerText = "Gracias por su colaboración"
}

})