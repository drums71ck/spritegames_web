
function playAudio(){

        let etiquetaAudio = document.createElement("audio")
        etiquetaAudio.setAttribute("src","Css/assets/ka-ching.mp3")
        console.log("siu")
        etiquetaAudio.play().prepend
    
}


function verifyVoids(){
        $(document).ready(function(){
                
                    if(($('#email').val() && $('#username').val() && $('#pswd').val())==0){
                        alert("the fields have not been filled")
                    }else{
                        if($('#pswd').val()!=$('#pswdagain').val()){
                            alert("The password not are equals")
                        }else{
                            createUsers();
                        }
                        

                    }
        

            });
}
function createUsers(){
    let userArray = JSON.parse(localStorage.getItem('users'));
    if (userArray == null) {
        userArray = [];
    } 
    let email = $('#email').val();
    let username = $('#username').val();
    let pswd = $('#pswd').val();   

    localStorage.setItem('username', username);
    userArray.push({
        "Email" : email,
        "Username" : username,
        "Password" : pswd
    })
    location.href='index.html'
}
    
function login(){
   let logArr = [];
   let userlog = $('#textUser').val();
   let passlog = $('#textPassword').val();
   let userComp = ""; 
   let passComp = "";
   if(JSON.parse(localStorage.getItem('users')) != null){
    logArr = JSON.parse(localStorage.getItem('users'));
    logArr.forEach(element => {
        userComp = element.Username;
        passComp = element.Password;
    });
    if(userComp != userlog){
        alert("El usuario no existe")
    } else if (passComp != passlog){
        alert("Contraseña incorrecta")
    }else{
        location.href='index.html'
        localStorage.setItem('username',userComp);
    }
   }


}


