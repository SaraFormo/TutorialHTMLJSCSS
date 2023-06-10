function cambiarColor(color){

    eliminarClases();
    var celdaColor = document.getElementById("celdaColor");
    if(color == 'red'){
        celdaColor.classList.add('rojo');
        
    }else if(color == 'azul'){
        celdaColor.classList.add('azul');

    }else{
        celdaColor.classList.add('amarillo');

    }
    
}

function eliminarClases(){
    var celdaColor = document.getElementById("celdaColor");
    celdaColor.classList.remove('azul');
    celdaColor.classList.remove('rojo');
    celdaColor.classList.remove('amarillo');
}