function validate(){
    var usrname=document.getElementById("usrname").value;
    var pass=document.getElementById("pass").value;
    if(usrname=="admin" && pass=="password"){
        window.location.assign("MePage.html");
    }else{
        alert("go away");
        return;
    }
}