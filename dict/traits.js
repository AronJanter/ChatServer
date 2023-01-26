const https = require("https");
const axios = require("axios");
module.exports = async () => {
    return {
        "trato_dialogo": {
            "dialogar": {
                "saludo": "Hola soy Aurori, tu asistente virtual estoy para ayudarlo en lo que necesite",
                "despido": "Hola aun me encuentro disponible para ayudarle" //"Gracias por escribirnos, ante cualquier no dudes de avisarnos, estaremos gustosos de ayudarlo."                
            }, 
            "Ubicacion": {
                "saludo": "Hola puedes ubicarnos en el siguiente enlace: <a  href='https://edan-01.github.io/sitioweblastmen.github.io/contact.html' target='_blank'>Ingrese Aquí</a>",
                "despido": "Hola puedes ubicarnos en el siguiente enlace: <a href='https://edan-01.github.io/sitioweblastmen.github.io/contact.html' target='_blank'>Ingrese Aquí</a>" //"Gracias por escribirnos, ante cualquier no dudes de avisarnos, estaremos gustosos de ayudarlo."                
            },  
            "queja": {
                "saludo": "Hola Lamentamos que tenga problemas con nuestros productos",
                "despido": "Lamentamos que tenga problemas con nuestros productos" //"Lamentamos que presente problemas con nuestros productos estaremos mejorando."                
            }            
        },
        "trato_buscar": { 
            "e_producto_general": {
                "saludo": async function(ints, ents) {
                    // Aqui consultar a mysql
                    // Consultar a una API
                    let {data} = await axios.get("http://lastpro-001-site1.btempurl.com/api/Categoria");
                    let result = (data.slice(0, 5).map((e) => {
                        return `<div class="product-item"><a target="_blank" href='https://edan-01.github.io/sitioweblastmen.github.io/shop-single.html'><img width="32" src='https://cdn3d.iconscout.com/3d/premium/thumb/product-5806313-4863042.png'> ${e.nombreCategoria}</a></div>`;
                    })).join("");
                    return `Claro, puedo sugerirte las siguientes categorias : ${result}`;
                },
                "saludoA": "Hola tenemos productos de las siguientes categorías: <br>-> Alimentos <br>-> Bebidas <br> -> Bienestar Natural <br>-> Cuidado Personal <br>-> Dietas Especiales <br>-> Medicina Natural",
                "despido": async function(ints, ents) {
                    // Aqui consultar a mysql
                    // Consultar a una API
                    let {data} = await axios.get("http://lastpro-001-site1.btempurl.com/api/Categoria");
                    let result = (data.slice(0, 5).map((e) => {
                        return `<div class="product-item"><a target="_blank" href='https://edan-01.github.io/sitioweblastmen.github.io/shop-single.html'><img width="32" src='https://cdn3d.iconscout.com/3d/premium/thumb/product-5806313-4863042.png'> ${e.nombreCategoria}</a></div>`;
                    })).join("");
                    return `Claro, puedo sugerirte las siguientes categorias : ${result}`;
                },
                "despidoA": "Tenemos productos de las siguientes categorías: <br>-> Alimentos <br>-> Bebidas <br> -> Bienestar Natural <br>-> Cuidado Personal <br>-> Dietas Especiales <br>-> Medicina Natural"
            },
            "e_producto_cuidado_personal": {
                "saludo": "Hola producto sobre el cuidado personal desea ",
                "despido": "Que producto sobre el cuidado personal desea" //"."
            },
            "e_producto_dietas_especiales": {
                "saludo": "Hola que producto sobre las dietas especiales desea",
                "despido": "Que producto sobre las dietas especiales desea" //"."
            },
            "e_producto_bebidas": {
                "saludo": "Hola que bebida desea",
                "despido": "Que bebida desea" //"."
            },
            "1. ": {
                "saludo": "Hola tenemos distintos tipos de alimentos: <br>-> Conservas <br>-> Abarrotes  <br>-> Snacks",
                "despido": "Tenemos distintos tipos de alimentos: <br>-> Conservas <br>-> Abarrotes  <br>-> Snacks" //"."
            },
            "e_producto_bienestar_natural": {
                "saludo": "Hola que producto del bienestar natural desea",
                "despido": "Que producto del bienestar natural desea" //"."
            },
            "e_producto_medicina_natural": {
                "saludo": "Hola que medicina necesita",
                "despido": "Que medicina necesita" //"."
            }
        }
    }
};