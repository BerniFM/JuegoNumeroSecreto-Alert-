let numeroMaximoPosible = 6;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
console.log(numeroSecreto);
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 5;
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor :`));

    console.log(typeof(numeroUsuario)); //Muestra en consola 

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    }else{
        if (numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        }else{
            alert('El número secreto es mayor');
        }
        intentos = intentos + 1;
        palabraVeces ='veces';
        if (intentos > maximosIntentos){
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
    };
}