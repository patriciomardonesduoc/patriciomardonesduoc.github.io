
//Este un javascript para conseguir la ubicacion

// var localizacion = document.getElementById("clima-lat");
// function obtLocalizacion() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(mostrar);
//     }
//     else {
//         localizacion.innerHTML = "localizacion no obtenida." ;
//     }
// };
// function mostrar(posicion) {
//     console.log('probando si pinta');
//     localizacion.innerHTML = "<p>Su Latitud es: " + posicion.coords.latitude +
//         "<br>Su Longitud es: " + posicion.coords.longitude + "</p>";
//     alert("probando si funciona js");

// };



$(document).ready(function () {
    // necesitamo saber si la geolocalizaciomn esta activa
    $("#btn").click(function (e) {
        e.preventDefault();
        if ("geolocation" in navigator) {
            console.log("yes");
            // el objeto navigator.geolocation.getCurrentPosition trae la posicion actual con callback
            // y las variable almacenan las coordenadas
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                var key = '589ab7f659717c61c042d6e5f4a91419'
                
                console.log("posición latitud" + lat + "posicion Longitud" + lon);

                $.get({
                    url:'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+key,
                    success : function(clima){
                        
                        console.log(clima.weather);

                         $.each(clima.weather, function(index, value){

                            // esta variable contiene el link para obtener la imagen del clima

                            var iconurl = "http://openweathermap.org/img/w/" + value.icon + ".png";

                            // $('#icono').html('<img src="' + iconurl + '"></img>');
                            // Aqui usamos un string literal
                            $('#icono').html(`<img src="${iconurl}"></img>`);

                            // $('#icono').attr('src', iconurl); este se puede pasar como objeto completo de un tag

                            //  el value es el objeto que se obtien de la iteracion
                            // y es el que recorre el each
                            console.log(iconurl);
                            console.log('el Value ' + value);
                            console.log('el Value con descrip ' +value.description);
                            console.log('el Value con icono ' +value.icon);

                        });
                        console.log('Main '+clima.main);
                        console.log('name '+clima.name);
                        
                        
                    },
                    error: function(e) {
                        console.error(e)
                    }
                })
            });
        } else {
            console.log("geolocation no disponible");
        }
        console.log();

        

    });
   
    

});