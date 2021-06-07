const fs  =  require ('fs');



const multiplicar = async(base)=>{

    try {
        let salida ="";  
        console.log('==============');
        console.log(`Tabla del:${base}`);
        console.log('==============');

        for (let i = 1; i < 11; i++) {
            salida += `${base} x ${i} = ${i * base} \n`;
        }
        console.log(salida);
        fs.writeFileSync(`Tabla-Del-${base}.txt`,salida);

        return 'Tabla creada y guardada';
    } catch (error) {
        throw err;
    }
    

    //(salida)? resolve(salida):reject('No se pudo generar la tabla')

 
}

module.exports= {
    multiplicar
};