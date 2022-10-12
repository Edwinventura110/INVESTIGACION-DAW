function login() {
    var user = document.getElementById("user").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;

// Condicionales a la hora mostrar las datos si todos los campos estan completados

    if(user && userEmail && userPassword){
        localStorage.setItem("user",user);
        localStorage.setItem("userEmail",userEmail);
        sessionStorage.setItem("userPassword",userPassword);

        window.open("./logininfo.html");

        document.getElementById("user").value = "";
        document.getElementById("userEmail").value = "";
        document.getElementById("userPassword").value = "";
    }else{
        alert("Los datos del formulario no pueden estar vacios");
        // Si en dado caso el usuario deja los campos del formulario vacios
    }

}