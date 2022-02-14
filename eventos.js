function mouseSobre(elem) {
    // change element background color
    elem.style.backgroundColor = "rgb(242, 135, 115)";
    elem.style.border = "solid";
    // color first contained h2

}

function mousAfuera(elem) {
    elem.style.backgroundColor = "";
    elem.style.border = "none";
}

function mostrar_info() {;
    const nombre = document.getElementById("txtNombre");
    const edad = document.getElementById("txtEdad");
    const ID = document.getElementById("txtID");
    const direccion = document.getElementById("txtDireccion");
    const historial = document.getElementById("txtHistorial");
    const errorEnviarNombre = document.getElementById("error1");
    
    let mensajesNombre = []
    let mensajesEdad = []
    let mensajesID = []
    let mensajesDireccion = []
    if (nombre.value == '' || nombre.value == null) {
        mensajesNombre.push("Dígite un Nombre");
        mensajesEdad.push("Dígite su edad");
        mensajesID.push("Dígite su ID");
        mensajesDireccion.push("Dígite una direccion");
    }
    if (mensajesNombre.length > 0) {
        errorEnviarNombre.innerText = mensajesNombre.join(', ')
        errorEnviarEdad.innerText = mensajesEdad.join(', ')
        errorEnviarID.innerText = mensajesID.join(', ')
        errorEnviarDireccion.innerText = mensajesDireccion.join(', ');
        setTimeout(function() {
            errorEnviarNombre.innerHTML = "";
        }, 1000);
    }
s
}

function limpiar() {
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtEdad").value = "";
    ocument.getElementById("txtID").value = "";
    ocument.getElementById("txtDireccion").value = "";
}

window.onload = function() {

}