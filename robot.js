let traits = require("./dict/traits");

module.exports = async (rWit, indexChat) => {
    let robotRes = "Disculpa no lo entendi.";
    let resJson = {};
    let localTraits = await traits();
    for(var i=0; rWit["traits"].length>i; i++) {
        let nameTrait = rWit["traits"][i];
        if ( localTraits[nameTrait] ) {
            let single = localTraits[nameTrait];
            for(let u=0; rWit["wit"]["traits"][nameTrait].length>u; u++) {
                resJson = localTraits[nameTrait]
                    [rWit["wit"]["traits"][nameTrait][u]["value"]];
            }
        }
    }

    if ( Object.keys(resJson).length !== 0 ) {
        if ( indexChat == 0 ) {
            let respuesta = resJson["saludo"];
            if ( typeof respuesta === "string" ) {
                robotRes = resJson["saludo"];
            }else  if ( typeof respuesta === "function" ) {
                robotRes = resJson["saludo"]();
            }
           
        } else {
            let despido = resJson["despido"];
            if ( typeof despido === "string" ) {
                robotRes = resJson["despido"];
            }else  if ( typeof despido === "function" ) {
                robotRes = resJson["despido"]();
            }
        }
    }

    return robotRes;
};