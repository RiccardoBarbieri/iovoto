let i=0;
let j=0;

function prova(){
    if(i==0)
    {
        alert('Non è possibile inserire i risultati dello scrutionio prima che le elezioni finiscano');
        i++;
    }else{
        window.open("http://127.0.0.1:5500/submitScrutatore.html", "_self"); 
        i=0;
    }
}

function change(id){
    if(confirm("Sei sicuro di voler registrare questo elettore?")==true){
        id.innerText = "Registrato";
        id.setAttribute("selected",null);
    }else{
        id.innerText = "Registra"
        id.removeAttribute("selected");
    }
}

function registra(){
    window.open("http://127.0.0.1:5500/statistica.html", "_self")
}
