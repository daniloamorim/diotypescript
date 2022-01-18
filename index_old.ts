// Escrevendo uma função tipada
/*function soma(a: number, b: number) {
    return a + b;
}
*/

//types
// type IAnimal = {
//     nome: string;
//     tipo: 'terrestre'| 'aquatico';
//     executarRugido(alturaEmDecibeis: number): void;
// }


//interface
// na interface alem de tipos também é possível executar funções
// a interface é utilizado para definir contratos, de estrutura de dados ou de classe que for definir
interface IAnimal {
    nome: string;
    tipo: 'terrestre'| 'aquatico';
    domestico: boolean;
    // executarRugido(alturaEmDecibeis: number): void;
}

// extends

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal{
    porte: 'pequeno'|'médio'|'grande';
}

// Usando o type
// usando os tipos apenas para fazer junções ou merges
type IDomestico = IFelino|ICanino;

//usando a interface
// const animal:IAnimal ={
//     nome: 'Elefante',
//     tipo: 'terrestre',
//     // executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}bd`)
// }

const animal: IDomestico = {
    domestico: true,
    nome: 'Cachorro',
    porte: 'pequeno',
    tipo: 'terrestre'
}