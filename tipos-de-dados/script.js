var nome = 'Frederico';
console.log(typeof nome) //typeof verifica qual é o tipo de dado de uma variavel (ex: String)

var nome = 'Frederico';
var sobrenome = 'Espeschit';
var nomeCompleto = nome + sobrenome
console.log(nomeCompleto);


console.log('Git na me irrita')



//Exercícios
//Declare uma variavél contendo uma string
var estado = 'Minas Gerais';

//Declare uma variavél contendo um número dentro da uma string
var numero = '28';

//Declare uma variavél com sua idade
var idade = 28;

//Declare duas variveis, uma com seu nome e outra com seu sobrenome e some as mesmas
var primeiroNome = 'Frederico',
    ultimoNome = 'Espeschit',
    nomeCompleto = primeiroNome + ' ' + ultimoNome

//template string
var nomeMae = 'Jussara',
    sobrenomeMae = 'Rodrigues',
    nomeCompletoMae = `${nomeMae} ${sobrenomeMae}`

//Coloque a seguinte frase em uma variavél: It's time
var frase = 'It\'s time'
var texto = `It's my life`

    
console.log(estado, (typeof numero), idade, nomeCompleto, frase, nomeCompletoMae, texto)