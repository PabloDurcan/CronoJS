let milisegundos = 00;
let segundos = 00;
let verificar = true;

function escribir() { 
    id = setInterval(() => {
            milisegundos++;
            document.getElementById("milisegundos").textContent = milisegundos;
            if (milisegundos > 99) {
                milisegundos  = 00;
                segundos++;
                document.getElementById("segundos").textContent = segundos;
            }
            if (segundos < 10) {
                document.getElementById("segundos").textContent = `0${segundos}`
            }
            if (milisegundos < 10) {
                document.getElementById("milisegundos").textContent = `0${milisegundos}`;
            }
            
    }, 10);

        //Intervalo para contar las vueltas
        mili_vuelta = 00;
        sec_vuelta = 00;

        idVuelta = setInterval(() => {
                mili_vuelta++;
                if (mili_vuelta > 99) {
                    mili_vuelta = 00;
                    sec_vuelta++;
                }
            }, 10);
 } 

function parar() { 
    clearInterval(id);
    clearInterval(idVuelta)
    verificar = true;
 }

function inicio() { 
    if (verificar == true) {
        escribir();
    }
    verificar = false;
 }

 //Iniciamos una variable para contar el numero de vueltas cada vez que se hace click en vueltas
let vuelta_contador = 0;


function vuelta() { 
    //Iniciamos tres variables que tengan el valor de minutos,segundos y milisegundos justo en el momento en el que se llama a la funcion (se le da click)
    let min = document.getElementById("minutos").innerHTML;
    let sec = document.getElementById("segundos").innerHTML;
    let milisec = document.getElementById("milisegundos").innerHTML;
    
    vuelta_contador++;
    
    //Iniciamos una variable que sea el propio cuerpo de la tabla
    let tblBody = document.getElementById("tblBody");
    
    //Creamos las filas, en este caso solo queremos crear una, por lo tanto el bucle es hasta 1
    for (let i = 0; i < 1; i++) {
        let fila = document.createElement("tr");
        
        //Creamos las celdas, en nuestro caso vamos a crear 3 diferentes porque queremos que tengan textos diferentes, creando 3 celdas en una misma fila, es decir una fila y 3 columnas
        //Primera celda, primera columna
        for (let j = 0; j < 1; j++) {
            let celda = document.createElement("td");
            let textoCelda = document.createTextNode(vuelta_contador);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
        }
        //Segunda celda segunda columna
        for (let j = 0; j < 1; j++) {
            let celda = document.createElement("td");
            let textoCelda = document.createTextNode(`${min}:0${sec_vuelta}:${mili_vuelta}`);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
        }
        //tercera celda tercera columna
        for (let j = 0; j < 1; j++) {
            let celda = document.createElement("td");
            //Aqui va el tiempo total, el valor de min, sec y milisec en el momento en el que apretamos el boton vuelta
            let textoCelda = document.createTextNode(`${min}:${sec}.${milisec}`);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
        }
        tblBody.appendChild(fila);
    }
    mili_vuelta = 0;
    sec_vuelta = 0;
}