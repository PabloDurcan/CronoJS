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
        if (i < 10) {
            option.text="0"+ i;
            x.add(option);
            option.value = i;
        }else{
            option.text= i;
            x.add(option);
        }
    } 
    //Segundos
    for (let i = 0; i < 60; i++) {
        let x = document.getElementById("selector1");
        let option = document.createElement("option");
        if (i < 10) {
            option.text="0"+ i;
            x.add(option);
            option.value = i;
        }else{
            option.text= i;
            x.add(option);
        }
    } 
    
    //Horas
    for (let i = 0; i < 11; i++) {
        let x = document.getElementById("selector2");
        let option = document.createElement("option");
        if (i < 10) {
            option.text="0"+ i;
            x.add(option);
            option.value = i;
        }else{
            option.text= i;
            x.add(option);
        }
    } 
     

 }
 generarOpciones();

 //Creamos dos funciones que se enlacen con dos botones que nos permitan aumentar o diminuir los valores de las opciones del select
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
    if (contador > 10) {
        document.getElementById("selector2").value = 0;
    }
}

function selectorMenosHoras(){
    let contador = document.getElementById("selector2").value;
    contador--;
    document.getElementById("selector2").value = contador;
    if (contador < 0) {
        document.getElementById("selector2").value = 10;
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

    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("milisegundos").textContent = segundos;

    //Si se recarga la pagina crear_boton va a ser true y, por lo tanto, solo vamos a poder crearlo una vez
    if (crear_boton == true) {
        let btn = document.createElement("BUTTON");
        btn.innerHTML = "INICIAR";
        btn.className = "btn-created";
        btn.setAttribute("id","btn-created");
        btn.onclick = inicioTemp;
        document.getElementById("btns_creados").appendChild(btn);

        let btn2 = document.createElement("BUTTON");
        btn2.innerHTML = "REINICIAR";
        btn2.className = "btn-created2";
        btn2.setAttribute("id","btn-created2");
        btn2.onclick = reiniciarTemp;
        document.getElementById("btns_creados").appendChild(btn2);
    }
    
    //Para que no se cree otra vez y entre en el condicional de arriba damos le valor de false a la variable de la condicion
    crear_boton = false;
}

//Esta es la funcion que hemos creado para cuando se le da click al boton iniciar temporizador creado a traves de JS anteriormente
//Variable para que no se pueda dar click mas de una vez a incio
let verificar_temporizador = true;
function inicioTemp(){
    if (verificar_temporizador == true) {
        let segundos_temp = document.getElementById("milisegundos").innerHTML;
        let minutos_temp = document.getElementById("minutos").innerHTML;
        let horas_temp = document.getElementById("horas").innerHTML;

        if (segundos_temp=="0" && minutos_temp=="0" && horas_temp=="0" || segundos_temp=="00" && minutos_temp=="00" && horas_temp=="00") {
            alert("Introduce algún valor, gracias")
        }else{
    
            idTemp = setInterval(() => {
                    segundos_temp--;
                    document.getElementById("milisegundos").innerHTML = segundos_temp;
                    if (segundos_temp < 10) {
                        document.getElementById("milisegundos").innerHTML = "0" + segundos_temp;
                    }
                    if (segundos_temp < 0) {
                        segundos_temp = 59;
                        document.getElementById("milisegundos").innerHTML = segundos_temp;
                        if (minutos_temp >= 0) {
                            minutos_temp--;
                            document.getElementById("minutos").innerHTML = minutos_temp; 
                        }
                    }
                    if (minutos_temp < 10) {
                        document.getElementById("minutos").innerHTML = "0" + minutos_temp;
                    }
                    if (minutos_temp < 0) {
                        minutos_temp = 59;
                        document.getElementById("minutos").innerHTML = minutos_temp;
                        if (horas_temp > 0) {
                            horas_temp--;
                            document.getElementById("horas").innerHTML = horas_temp;
                        }
                    }
                    if (horas_temp < 10) {
                        document.getElementById("horas").innerHTML = "0" + horas_temp;
                    }
                    if (horas_temp < 0) {
                        horas_temp = "00";
                        document.getElementById("horas").innerHTML = horas_temp + "horas";
                    }
                    if (segundos_temp=="0" && minutos_temp=="0" && horas_temp=="0" ){
                        document.getElementById("horas").innerHTML = "00";
                        document.getElementById("minutos").innerHTML = "00";
                        document.getElementById("milisegundos").innerHTML = "00";
                        alert("Se acabo");
                        clearInterval(idTemp);
                        verificar_temporizador = true;

                        
                    }
                }
            , 1000);
            verificar_temporizador = false;
        }
    }

}


function reiniciarTemp(){
    if (verificar_temporizador==false) {
        clearInterval(idTemp);
        verificar_temporizador = true;
        document.getElementById("milisegundos").innerHTML = "00";
        document.getElementById("minutos").innerHTML = "00";
        document.getElementById("horas").innerHTML = "00";
    }
}
