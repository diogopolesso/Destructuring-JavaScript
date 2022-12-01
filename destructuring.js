//Arrays:

const numerosPares = [2, 4, 6];
const numeroImpares = [1, 3, 5];

const numeros = [...numerosPares, ...numeroImpares];

//const num1 = 1;
//const num2 = 2;

//Mesmo Resultado, mas de outra forma:

const [num1, num2, ...outrosNumero] = [1, 2, 3, 4, 5];

const [nome1 = 'Juliana'] = [];

// console.log(numeros);
// console.log(num1, num2, outrosNumero);
// console.log(nome1);

//Objeto:

const pessoa = {
    nome: 'Juliana',
    idade: 39,
}

const pessoaTelefone = 
{...pessoa, telefone: 51995404186}

//console.log(pessoa, pessoaTelefone);

//Outra Forma:

const {nome} = pessoa;
const {idade} = pessoa;

//console.log(nome, idade);

//Funções:

function imprimeDados(dados){
    const {nome, idade} = dados
    console.log(nome, idade);
}

//imprimeDados(pessoa);


//Mesmo Resultado mas de outra forma:

function imprimeDados({nome, idade}){
    console.log(nome, idade);
}

imprimeDados(pessoa);





