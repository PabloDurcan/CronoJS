// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Creamos 60 opciones desplegables dentro del modal a traves de una funcion que dentro tendra bucles para generar x numero de opciones
function generarOpciones() { 
    for (let i = 1; i < 60; i++) {
        let x = document.getElementById("selector");
        let option = document.createElement("option");
        option.text=i;
        x.add(option);
    } 

    for (let i = 1; i < 60; i++) {
        let x = document.getElementById("selector1");
        let option = document.createElement("option");
        option.text=i;
        x.add(option);
    } 
 }
 generarOpciones();

 //Creamos dos funciones que se enlacen con dos numeros que nos permita aumentar o diminuir los valores de las opciones del select
 function selectorMasSec(){
    let contador = document.getElementById("selector1").value;
    contador++;
    document.getElementById("selector1").value = contador;
    if (contador > 59) {
        document.getElementById("selector1").value = 1;
    }
}

function selectorMenosSec(){
    let contador = document.getElementById("selector1").value;
    contador--;
    document.getElementById("selector1").value = contador;
    if (contador < 1) {
        document.getElementById("selector1").value = 59;
    }
}

function selectorMasMin(){
    let contador = document.getElementById("selector").value;
    contador++;
    document.getElementById("selector").value = contador;
    if (contador > 59) {
        document.getElementById("selector").value = 1;
    }
}

function selectorMenosMin(){
    let contador = document.getElementById("selector").value;
    contador--;
    document.getElementById("selector").value = contador;
    if (contador < 1) {
        document.getElementById("selector").value = 59;
    }
}