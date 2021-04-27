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
    //Minutos
    for (let i = 0; i < 60; i++) {
        let x = document.getElementById("selector");
        let option = document.createElement("option");
        option.text=i;
        x.add(option);
    } 
    //Segundos
    for (let i = 0; i < 60; i++) {
        let x = document.getElementById("selector1");
        let option = document.createElement("option");
        option.text=i;
        x.add(option);
    } 
    
    //Horas
    for (let i = 0; i < 100; i++) {
        let x = document.getElementById("selector2");
        let option = document.createElement("option");
        option.text=i;
        x.add(option);
    } 
     

 }
 generarOpciones();

 //Creamos dos funciones que se enlacen con dos numeros que nos permita aumentar o diminuir los valores de las opciones del select
 //Segundos
 function selectorMasSec(){
    let contador = document.getElementById("selector1").value;
    contador++;
    document.getElementById("selector1").value = contador;
    if (contador > 59) {
        document.getElementById("selector1").value = 0;
    }
}

function selectorMenosSec(){
    let contador = document.getElementById("selector1").value;
    contador--;
    document.getElementById("selector1").value = contador;
    if (contador < 0) {
        document.getElementById("selector1").value = 59;
    }
}

//Minutos
function selectorMasMin(){
    let contador = document.getElementById("selector").value;
    contador++;
    document.getElementById("selector").value = contador;
    if (contador > 59) {
        document.getElementById("selector").value = 0;
    }
}

function selectorMenosMin(){
    let contador = document.getElementById("selector").value;
    contador--;
    document.getElementById("selector").value = contador;
    if (contador < 0) {
        document.getElementById("selector").value = 59;
    }
}

//Horas
function selectorMasHoras(){
    let contador = document.getElementById("selector2").value;
    contador++;
    document.getElementById("selector2").value = contador;
    if (contador > 99) {
        document.getElementById("selector2").value = 0;
    }
}

function selectorMenosHoras(){
    let contador = document.getElementById("selector2").value;
    contador--;
    document.getElementById("selector2").value = contador;
    if (contador < 0) {
        document.getElementById("selector2").value = 99;
    }
}


//Hacemos una variable para que solo se pueda crear un boton cuando se le haga click a Aceptar
let crear_boton = true;
//Creamos la funcion que hara funcionar al temporizador con un onclick en el boton aceptar del model
function setTemp(){
    //Cuando se le da click al boton el modal desaparece, igual que hicimos con la X de arriba y cuando haces click fuera del modal
    modal.style.display = "none";

    //Tres variables con el valor de cada select
    let horas = document.getElementById("selector2").value;
    let minutos = document.getElementById("selector").value;
    let segundos = document.getElementById("selector1").value;

    //Validamos para que, en caso de elegir opciones menores a 10 pongamos un 0 delante del numero, si es mayor a 10 pondremos el valor de los select en el propio temporizador
    if (horas < 10) {
        document.getElementById("horas").textContent = "0" + horas;
    }else document.getElementById("horas").textContent = horas;

    if (minutos < 10) {
        document.getElementById("minutos").textContent = "0" + minutos;
    }else document.getElementById("minutos").textContent = minutos;

    if (segundos < 10) {
        document.getElementById("milisegundos").textContent = "0" + segundos;
    }else document.getElementById("milisegundos").textContent = segundos;

    //Si se recarga la pagina crear_boton va a ser true y, por lo tanto, solo vamos a poder crearlo una vez
    if (crear_boton == true) {
        let btn = document.createElement("BUTTON");
        btn.innerHTML = "INICIAR";
        btn.className = "btn-created";
    
        document.getElementById("btns").appendChild(btn);
    }

    //Para que no se cree otra vez y entre en el condicional de arriba damos le valor de false a la variable de la condicion
    crear_boton = false;
}