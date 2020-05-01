const opts ={
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 20
    }
}

const argv = require('yargs')
    .command('listar', 'Impirme en consola la tabla de multiplicar',opts)
    .command('crear','Genenrar un archio con la tabla de multiplicar',opts)
    .help()
    .argv;

module.exports = {
    argv
}