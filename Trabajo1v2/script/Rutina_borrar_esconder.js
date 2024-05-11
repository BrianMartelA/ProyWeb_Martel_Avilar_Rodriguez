var flag = true;
function esconder(){
if (flag){
  document.getElementById("contrasena").type = "password";
  document.getElementById("eye").src = "img/eye_hide_regular_icon_203604.png";

  flag = false;
}
else{
  document.getElementById("contrasena").type = "text";
  document.getElementById("eye").src = "img/eye_show_regular_icon_203603.png";
  flag = true;
}
}
function borrar(){
  document.getElementById("confirmarContrasena").value = "";
}
