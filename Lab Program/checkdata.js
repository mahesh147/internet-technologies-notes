function checkdata(){ 
            var user=document.formvalidate.user.value;
            if(user==" "){
                alert("Enter the Username :");
                return;
            }
            if(user.length<7){
                alert("Username should contain atleast 7 characters");
                return;
            }
            
            var pwd=document.formvalidate.pwd.value;
            
            if(pwd==" "){
                alert("Enter the Password :");
                return;
            }
    
            if(pwd.length<7){
                alert("Password should contain atleast 4 characters");
                return;
            }
    
            if((user=="aldrin")&&(pwd=="toc16it005")){
                alert("Login Successfull");
            }
            else
                alert("Invalid Username and Password");
        }//end of function