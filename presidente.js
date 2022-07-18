function conferma(){
    let text;
    if(confirm("Sei sicuro di voler confermare i risultati inseriti?") == true){
        window.open("http://127.0.0.1:5500/statistica.html","_self");
    }else {

    }
}

function annulla(){
    let text
    if(confirm("I dati inseriti sono sbagliati.\nE dunque necessitano di essere modificati?") == true){
        window.open("http://127.0.0.1:5500/loadingPresidente.html","_self");
    }else {

    }
}