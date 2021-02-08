function kontakti(){
    if(document.Kontakt.mesEmri.value==""){
        alert("Plotesoni emrin!");
        document.Kontakt.mesEmri.focus();
        return false;
    }
    else if(document.Kontakt.mesFjalekalimi.value==""){
        alert("Plotesoni passwordin!");
        document.Kontakt.mesFjalekalimi.focus();
        return false;
    }
    else if(document.Kontakt.mesEmail.value==""){
        alert("Plotesoni email-en!");
        document.Kontakt.mesEmail.focus();
        return false;
    }
    else if(document.Kontakt.numri.value==""){
        alert("Plotesoni numrin!");
        document.Kontakt.numri.focus();
        return false;
    }
    else if(document.Kontakt.lokacioni.value==""){
        alert("Plotesoni adresen!");
        document.Kontakt.lokacioni.focus();
        return false;
    }
    else if(document.Kontakt.mesazhi.value==""){
        alert("mesazhi eshte i zbrazte! Ju lutem plotesojeni para se ta dergoni!");
        document.Kontakt.mesazhi.focus();
        return false;
    }
    else{
        alert("mesazhi u dergua me sukses! faleminderit per feedback!");
        return true;
    }
}
