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
    else if(document.regjistrim.email.value==""){
        alert("Plotesoni email-in!");
        document.regjistrim.email.focus();
        return false;
    }
    else{
        alert("Jeni regjistruar me sukses!");
        return true;
    }
}
function login(){
    if(document.logini.emrii.value==""){
        alert("Plotesoni emrin!");
        document.logini.emrii.focus();
        return false;
    }
    else if(document.logini.fjalkalimi.value==""){
        alert("Plotesoni passwordin!");   
        document.logini.fjalkalimi.focus();
        return false;
    }
    else{
        alert("Jeni Kyqur me sukses!");
        return true;
    }
}