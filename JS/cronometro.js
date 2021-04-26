let milisegundos = 00;
let segundos = 00;
let minutos = 00;
let verificar = true;

function escribir() { 
    //Intervalo del cronometro principal, van a ser los milisegundos los que se inicien y hagan que los segundos y los minutos aumenten hasta cierto punto
    id = setInterval(() => {
        //Los milisegundos aumentan y esto hará que pase lo mismo con segundos y minutos
            milisegundos++;
            document.getElementById("milisegundos").textContent = milisegundos;
            //Hacemos condicionales para que el cronometro salga bien: 01,02,03...10,11...
            if (milisegundos > 99) {
                milisegundos  = 00;
                segundos++;
                document.getElementById("segundos").textContent = segundos;
            }
            if (segundos > 59) {
                segundos = 0;
                minutos++;
                document.getElementById("minutos").textContent = minutos;
            }
            if (minutos < 10) {
                document.getElementById("minutos").textContent = `0${minutos}`
            }
            if (segundos < 10) {
                document.getElementById("segundos").textContent = `0${segundos}`
            }
            if (milisegundos < 10) {
                document.getElementById("milisegundos").textContent = `0${milisegundos}`;
            }
            
    }, 10);

        //Intervalo para contar las vueltas, funciona igual que el intervalo del cronometro principal
        mili_vuelta = 00;
        sec_vuelta = 00;
        min_vuelta = 00;

        idVuelta = setInterval(() => {
                mili_vuelta++;

                if (mili_vuelta > 99) {
                    mili_vuelta = 00;
                    sec_vuelta++;
                }
                if (sec_vuelta > 59) {
                    sec_vuelta = 00;
                    min_vuelta++;
                }
                if (min_vuelta > 59) {
                    min_vuelta = 00;
                }
            }, 10);
 } 
 
 function parar() { 
     clearInterval(id);
     clearInterval(idVuelta)
     verificar = true;
     let audio = document.getElementById("audio");
    audio.play();
     
    console.log(verificar);
 }

function inicio() { 
    if (verificar == true) {
        escribir();
        let audio = document.getElementById("audio");
        audio.play();   
    }
    verificar = false;
    console.log(verificar);
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
            let textoCelda = document.createTextNode(`${min_vuelta}:${sec_vuelta}.${mili_vuelta}`);
            //Hacemos la condicion para que la columna hora esté bien escrita, cuando es menor a 10 poner un 0 delante...
            if (mili_vuelta < 10 && sec_vuelta < 10 && min_vuelta < 10) {
                textoCelda = document.createTextNode(`0${min_vuelta}:0${sec_vuelta}.0${mili_vuelta}`)
            }else 
            if (sec_vuelta < 10 && min_vuelta < 10) {
                textoCelda = document.createTextNode(`0${min_vuelta}:0${sec_vuelta}.${mili_vuelta}`)
            }else
            if (min_vuelta < 10 && mili_vuelta < 10) {
                textoCelda = document.createTextNode(`${min_vuelta}:0${sec_vuelta}.0${mili_vuelta}`)
            }else if (min_vuelta < 10) {
                textoCelda = document.createTextNode(`0${min_vuelta}:${sec_vuelta}.${mili_vuelta}`)
            }
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
    let audio = document.getElementById("audio");
    audio.play();
}