const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite)=>{
return new Promise((resolve, reject)=>{
let data =''; 
for(let i=1;i<=limite;i++){
if (!Number(base)){
    reject('El valor introducido no es un numero')
    return;
}


    data += (`${base} * ${i} = ${base*i} \n`)
}

fs.writeFile(`./tabla/tabla-${base} al ${limite}.txt`, data, (err) => {
    if (err) 
        reject(err);
    else 
        resolve(`'tabla-${base} al ${limite}.txt`);
  });
});
}

let listarArchivo = (base, limite)=>{
console.log('=========================='.green);
console.log('tabla de 3'.red);
console.log('=========================='.green);
    
    
    
    
    return new Promise((resolve, reject)=>{
    let data =''; 
    for(let i=1;i<=limite;i++){
    if (!Number(base)){
        reject('El valor introducido no es un numero')
        return;
    }
    
    
       resolve (console.log(`${base} * ${i} = ${base*i} \n`))
    }
    
    
    });
    }

//Elementos que se utilizan de forma global
module.exports = {
    crearArchivo,
    listarArchivo
}