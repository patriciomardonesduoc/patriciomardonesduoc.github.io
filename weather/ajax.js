
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
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                console.log("posición latitud" + lat + "posicion Longitud" + lon);
                $.get({
                    url: 'api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=9ff63aa87dba2bebd328395f290fb3a4',
                    success : function(clima){
                        console.log(clima.weather);
                        $.each(clima, function(index, value){
                            console.log(clima.weather);
                        })
                        
                    },
                    error: function(e) {
                        console.error(e)
                    }
                })
            });
        } else {
            console.log("geolocation no disponible");
        }

        

    });
   
    

});