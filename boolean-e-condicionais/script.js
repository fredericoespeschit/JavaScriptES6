//Existem dois valores booleanos false ou true.
var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiGraduacao){ //O valor dentro dos parênteses sempre será avaliado em false ou true.
    console.log('Possui graduação')
} else {
    console.log('Não possui gradução')
}

console.log('---------------------')


if(possuiGraduacao){
console.log('Possui graduação, mas não possui doutorado')
} else if(possuiDoutorado){
    console.log('Possui graduação e doutorado')
} else {
    console.log('Não possui gradução')
}