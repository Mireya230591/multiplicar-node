
//Requerds
const colors = require('colors/safe');
const argv = require ('./config/yargs').argv;
const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarArchivo(argv.base, argv.limite )
        .then(archivo =>
            console.log(`hecho`))
        .catch(e => console.log(e));
        break;

    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo =>
                console.log(`Archivo creado` ,colors.rainbow(`${archivo.red}`)))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Comando no reconocido')
}
// let base = 'abc';no

// console.log(process)
let argv2 = process.argv;
// let parametro = argv[2]
// let base = parametro.split('=')[1];
// console.log(argv);


     // crearArchivo(base) 
    // .then( archivo => 
    // console.log(`Archivo creado ${archivo}` ))
    // .catch(e => console.log(e));