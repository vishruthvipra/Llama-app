/**
 * Created by vishruthkrishnaprasad on 12/9/17.
 */

(function () {
    angular
        .module("LlamaApp")
        .controller("EncyclopediaController", encyclopediaController);
    function encyclopediaController($location) {
        var vm = this;
        var map1, infoWindow, weathermap;
        var sensors = []

        function init() {
            initMap();
            findAllSensors();
        }

        init();


        function initMap() {
            weathermap = {lat: parseFloat(latitude), lng: parseFloat(longitude)};
            map1 = new google.maps.Map($("#gmaps")[0], {
                zoom: 11,
                center: weathermap
            });

            map2 = new google.maps.Map($("#gmap")[0], {
                zoom: 11,
                center: weathermap
            });

            google.maps.event.addDomListenerOnce(map1, 'idle', function () {
                google.maps.event.addDomListener(window, 'resize', function () {
                    map1.setCenter(weathermap);
                });
            });
        }

        function setMarker(map, location, title, content) {
            latitude = parseFloat(location.latitude);
            longitude = parseFloat(location.longitude);

            var markerOptions = {
                position: {lat: latitude, lng: longitude},
                map: map,
                title: title
            };

            var marker = new google.maps.Marker(markerOptions);
            markers.push(marker);

            google.maps.event.addListener(marker, 'click', function () {
                // close window if not undefined
                if (infoWindow !== void 0) {
                    infoWindow.close();
                }
                // create new window
                var infoWindowOptions = {
                    content: content
                };
                infoWindow = new google.maps.InfoWindow(infoWindowOptions);
                infoWindow.open(map, marker);
            });

        }

        function findAllSensors() {

                for (var i in sensors) {
                    setMarker(map1, sensors[i].location, sensors[i].area, sensors[i].sensorType);
                }


        }
    }
})();








