//incremente de uno en uno
//decremente de uno en uno
//borre toda la cuenta

//Necesitamos iniciar en cero
var valorContador = 0

function incrementar(){
    valorContador++; //incrementar valor de uno en uno
    document.getElementById("contador").innerHTML=valorContador

}

function decrementar(){
    valorContador--; //decrementar valor de uno en uno
    document.getElementById("contador").innerHTML=valorContador
}

function resetear(){
    valorContador = 0
    document.getElementById("contador").innerHTML=valorContador

}