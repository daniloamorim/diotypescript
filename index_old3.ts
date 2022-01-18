// Generic Types
// para tipar e poder receber qualquer valor
// por padrao quando não sei o que vou receber uso a Letra "T"

// isso é bom quando vai ter um retorno da API e não sei o que vai ser retornado
function adicionaApendiceALista<NaoSei>(array: any[], valor: NaoSei){
    return array.map(item => item + valor);
}

adicionaApendiceALista([1, 2, 3], 1);
