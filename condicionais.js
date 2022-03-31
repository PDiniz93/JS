// Se a hora estiver entre 06:00 até 12:00 : BOM DIA!
// Se estiver entre 12:00 até 18:00 : BOA TARDE!
// Caso contrário : BOA NOITE!

let horario = 19;

if(horario>=6 && horario <=12){
    console.log("BOM DIA");
}
else if(horario>=13 && horario <=18){
    console.log("BOA TARDE");
}
else{
    console.log("BOA NOITE");
}

// Switch case

let permissao; // comum,gerente,diretor
permissao = 'diretor';

switch (permissao){
    case 'comum' : 
        console.log('usuario comum');
    break;

    case 'gerente' : 
        console.log('usuario gerente');
    break;

    case 'diretor' : 
        console.log('usuario diretor');
    break;

    default:
        console.log('usuario não reconhecido');
}