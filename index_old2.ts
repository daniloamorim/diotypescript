const input = document.getElementById('input') as HTMLInputElement;
// é necessário especificar o tipo ao final ex = as HTMLInputElement, mas é usado em 
// qualquer tipo de elemento que eu precise chamar no HTML pelo TypeScript.
// dessa forma que está aqui é o correto para pegar os values no HTML utilizando os types.

// BONUS
// não posso declara como herança uma vez que o elemento ainda não estará criado ele retornará sempre null
// exemplo de como nao fazer
// const input: HTMLInputElement = document.getElementById('input');

input.addEventListener('input',(event)=>{
// console.log('Digitei')
const inpt = event.currentTarget as HTMLInputElement;
console.log(inpt.value);
});
