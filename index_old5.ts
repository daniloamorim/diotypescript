interface Cachorro{
    nome: string;
    idade: number;
    parqueFavorito?: string;
}
// teste
// craindo somente leitura
// Crio uma iteração para que todo item na interface ("K" é padrao)
type CachorroSomenteLeitura = {
    // dessa forma retiro os valores opcionais
    readonly[K in keyof Cachorro]-?: Cachorro[K];
    // readonly[K in keyof Cachorro]: Cachorro[K];
}

class MeuCachorro implements CachorroSomenteLeitura{
    nome;
    idade;
    parqueFavorito;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Bob', 4);  