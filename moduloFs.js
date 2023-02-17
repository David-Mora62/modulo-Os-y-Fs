const fs = require('fs');
const os = require('os');

//const dato =fs.readFileSync('data/dato.txt', 'utf-8');
//console.log(dato);

//const tue =fs.readFileSync('data/dato.txt');
//console.log(tue.toString());

//const n = "happy";
//fs.writeFileSync('data/tercero.js',n);

let Memoria = os.totalmem();
let kilobiteT = Memoria / (1024 * 1024);
var gigabyteT = kilobiteT / 1024;
var gigabyteredondeadoT = Math.round(gigabyteT);


let memori = gigabyteredondeadoT.toString() + "gb";

var user =os.userInfo().username;
var userT = JSON.stringify(user);

var version = os.version();
var versionT = version.toString();


let frecuencia = os.cpus().slice(0, 1).map((registro) => registro.model);
var compu = JSON.stringify(frecuencia);



fs.writeFileSync('data/tercere.js', `${userT} \n ${memori} \n ${versionT} \n ${compu}` );

