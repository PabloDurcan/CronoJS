//Lo primero que vamos a crear va a ser una funcion que nos cree una ventana de dialogo en la que vamos a ingresar los datos que le queremos meter a nuestro temporizador

//Vamos a pasar a la funcion dos parametros, una url que va a ser el html que queremos que aparezca en la ventana y un width que va a ser el ancho de esa ventana emergente que queremos, el alto va a ser definido por el texto
function jsAbrirDialogo(url,width) { 
    //Creamos un divpadre con el propio JS, va a ser el "lienzo" de nuestro div hijo, que va a estar delante del divpadre
    let DivPadre = document.createElement("div");
    //Asignamos una clase que ya tenemos en nuestras hojas de estilo, en nuestro caso .DivPadre
    DivPadre.className = "DivPadre";
    //Asignamos una id de igual manera que la clase
    DivPadre.id = "DivPadre";
    
    
    //Creamos el divhijo de la misma manera que creamos el padre
    let DivHijo = document.createElement("div");
    DivHijo.className = "DivHijo";
    DivHijo.id = "DivHijo";
    //Aqui le vamos a agregar el ancho que la funcion esta recibiendo por parametro
    DivHijo.style.width = width+"vw";


    fetch(url)
    .then(function (res) { 
        return res.text();
     })
    .then(function (texto) { 
        document.getElementById("DivHijo").innerHTML = texto;
     })



    //Asignamos el divpadre que hemos creado al body de nuestro documento
    document.body.appendChild(DivPadre);
    //Agregamos el hijo de padre al padre, ahora no es al body directamente sino al divpadre que hemos creado antes
    DivPadre.appendChild(DivHijo);
}



//Eliminar el contenido de la ventana emergente, cerrar la ventana
function jsCerrarDialogo() { 
    //Si cogemos el padre y lo eliminamos lo haremos tambien al hijo, el hijo es parte del padre
    let DivPadre = document.getElementById("DivPadre");
    document.body.removeChild(DivPadre);

}