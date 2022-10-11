let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const endpoint = 'https://pokeapi.co/api/v2/type';

function exito(response){
    console.log(JSON.parse(response))
}

function fallo(status){
    console.log(status)
}

function get_data(endpoint, exito, fallo){
    //2. creamos el objeto de conexion
    let http = new XMLHttpRequest();
    //3. abrir conexion ala API
    http.open('GET' , endpoint);
    //4. enviar la solicitud(request) ala API
   http.send()
    http.onload = () => {
        if (http.status == 200) {
            console.log("HOLA")
                exito(http.responseText);
        } else {
            console.log("ERROR")
                fallo(http.status);
        }
    }
}

//invocamos la funcion get_data
get_data(endpoint , exito ,fallo )