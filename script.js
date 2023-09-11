const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');


//dato es el numero que le pongo en el input

CALCULAR.addEventListener('click',() => {
    const DATO = document.getElementById('peso').value;
   
   
    if(DATO > 0) {
        ERROR.style.display = 'none';
       let flujo = calcFlujo(DATO); 
       let manetenimiento = flujo*1.5;
       FLU.innerHTML = flujo + ' cc/hr';
       MAN.innerHTML = 'm+m/2' + manetenimiento + ' cc/hr';
       FLU.style.display = 'block';
       MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})


function calcFlujo(peso) {
  let resto = peso;
  let flujo = 0;
if (resto > 20) {
    let aux = resto - 20;
    resto += aux*1;
    resto -= aux;      

} if (resto > 10){
    let aux = resto - 10;
    resto += aux*2;
    resto -= aux;
}
flujo += resto*4;
return flujo;
}