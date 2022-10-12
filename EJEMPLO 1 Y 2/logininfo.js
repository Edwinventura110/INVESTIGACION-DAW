// Campos del formulario que se les mostrara impresos al Usuario
var user = localStorage.getItem("user");
var userEmail = localStorage.getItem("userEmail");
var userPassword = sessionStorage.getItem("userPassword");

function showUser(){
    document.write(user);
}
function showEmail(){
    document.write(userEmail);
}
function showPassword(){
    document.write(userPassword);
}