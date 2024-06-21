function validation(){
   
   



    let username =document.getElementById('username').value;
    let name= document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let rpassword = document.getElementById('rpassword').value;
    let obj={
        name:name,
        username:username,
        password:password,
        rpassword:rpassword
    }
    console.log(username)
     if(name==""){
        document.getElementById('errorname').innerHTML="please name field";
        document.getElementById('name').focus();
        return false;

    }
     else if(username ==""){
        document.getElementById('errorphone').innerHTML="";
        document.getElementById('errorusername').innerHTML="please enter username";
        document.getElementById('username').focus();
        return false;
    }
    else if(!username.includes('@')){
        document.getElementById('errorusername').innerHTML="please enter @ in username field";
        document.getElementById('username').focus();
        return false;
        
    }
    else if(!username.includes('gmail.com')){
        document.getElementById('errorusername').innerHTML="please enter  gmail.com";
        document.getElementById('username').focus();
        return false;
        
    }
   
  
   else if(password ==""){
        document.getElementById('erroremail').innerHTML="";
        document.getElementById('errorpassword').innerHTML="please enterpassword";
        document.getElementById('password').focus();
        return false;
    }
    else if(!password.includes('@')){
        document.getElementById('errorphone').innerHTML="";
        document.getElementById('errorpassword').innerHTML="please include special character";
        document.getElementById('password').focus();
        return false;
    }
    else if(rpassword ==""){
        document.getElementById('errorpassword').innerHTML="";
        document.getElementById('errorphone').innerHTML="please enterpassword";
        document.getElementById('password').focus();
        return false;
    }
    else if(!rpassword.includes('@')){
        document.getElementById('errorpassword').innerHTML="";
        document.getElementById('errorrpassword').innerHTML="please include special character";
        document.getElementById('rpassword').focus();
        return false;
    }

    else{
        fetch('http://localhost:3000/registration',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        }).then(alert("data submiited"))
    }  

}