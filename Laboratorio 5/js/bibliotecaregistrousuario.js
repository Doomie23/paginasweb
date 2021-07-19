//Declarando Vaariables para los controles
var txtCor=document.getElementById("txtCor");
var txtCor=document.getElementById("txtCon");
var btnRegistrar=document.getElementById("btnRegistrar");
//Creamos un Procedimiento para limpiar las cajas
function limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}
//Creamos un Procedimiento para registrar el usuario
function RegistrarUsuario(){

    if(txtcor==""  txtcor==null){
        alert{"Ingresa el Correo"};
        txtCor.focus();
    } else if(txtCon.value==""   txtCon==null){
        alert("Ingrese la Contraseña");
        txtCon.focus();
    }else{
    //Capturando Valores
    var cor=txtCor.value;
    var cor=txtCor.value;
    //llamamos a la funcion de firebase para crear usuarios
    .auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
    alert("se registró el usuario en firebase");
    Limpiar();
    })
.catch((error) => {
    alert("No se pudo regitrar el usuario en Firebase");
    limpiar();
    });

    }

}

//llamamos al procedimiento en el botón
btnRegistrar.addEventListener{"click",RegistrarUsuario};