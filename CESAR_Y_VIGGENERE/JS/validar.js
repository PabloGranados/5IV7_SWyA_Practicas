function Aceptar(){
    var n="no";
    for(var i=0; i<document.c.tipoc.length; i++){
        if(document.c.tipoc[i].checked){
            if(document.c.tipoc[i].value == 1){
                const b = document.createElement("a");
                b.href="./cesar.html"
                b.click();
                n="si"
            }
            if(document.c.tipoc[i].value == 2){
                const b = document.createElement("a");
                b.href="./viggenere.html"
                b.click();
                n="si"
            }
        }
    }
    if(n=="no"){
        alert("Por favor elije una opcion")
    }
}
