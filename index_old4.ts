// Desenvolvendo condicionais a partir de parametros

// interface IUsuario {
//     id: string;
//     email: string;
// }

// interface IAdmin extends IUsuario {
//     cargo: 'gerente'|'coordenador'|'supervisor'
// }

// function redirecione (usuario: IUsuario | IAdmin){
//     // o 'in' é utilizado para saber se possui os dados
//     if('cargo' in usuario){
//         // redirecionar para area de administração
//     }

//     // redirecionar para área do usuário
// }

// Outra forma de fazer usando o "?" para variáveis opcionais

interface IUsuario {
    id: string;
    email: string;
    // com a interrogação agora passa a ser um dado OPICIONAL
    cargo?: 'funcionario'|'gerente'|'coordenador'|'supervisor'
}

function redirecione (usuario: IUsuario){
    if(usuario.cargo){
        // redirecionar("para a url x" usuario.cargo)
    }
    // redirecionar para area do usuario
    
}   