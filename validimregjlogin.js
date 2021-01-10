$('.message a').click(function(){
    $('form').animate({ height: "toggle" ,opacity: "toggle"}, "slow" );
    });
    
    function regjistrimi(){
        if(document.regjistrim.emri.value==""){
            alert("Plotesoni emrin!");
            document.regjistrim.emri.focus();
            return false;
        }
        else if(document.regjistrim.password.value==""){
            alert("Plotesoni passwordin!");
            document.regjistrim.password.focus();
            return false;
        }
        else if(document.regjistrim.password.value.length !=6){
            alert("Passwordi duhet te kete se paku 6 karaktere!");
        }
        else if(document.regjistrim.email.value==""){
            alert("Plotesoni email-in!");
            document.regjistrim.email.focus();
            return false;
        }
        else{
            alert("Jeni regjistruar me sukses!");
        }
    }   
        function login(){
            if(document.logini.emrii.value==""){
                alert("Plotesoni emrin!");
                document.logini.emrii.focus();
                return false;
            }
            else if(document.logini.passwordii.value==""){
                alert("Plotesoni passwordin!");   
                document.logini.passwordii.focus();
                return false;
            }
        }