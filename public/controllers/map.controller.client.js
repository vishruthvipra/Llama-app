/**
 * Created by vishruthkrishnaprasad on 12/9/17.
 */

(function () {
    angular
        .module("LlamaApp")
        .controller("MapController", mapController);
    function mapController() {
        var vm = this;
        vm.locations = ["Australia: 400 thousand", "Argentina: 500 thousand", "Bolivia: 700 thousand",
            "Chile: 600 thousand", "Ecuador: 600 thousand", "England: 100 thousand", "Peru: 600 thousand",
            "Russia: 300 thousand"];
        vm.adaptations = [
            "As a high altitude dweller, llamas have developed several adaptations." +
            "They have high amounts of hemoglobin, or red blood cells, and their corpuscles are oval, not rounded.",

            "These adaptations help the llama live in rarefied air." +
            "Their teeth and gums developed to clip tough vegetation." +
            "They have only one upper incisor; the lower incisors cut plants between them and the upper hard gums.",

            "They tend to live at altitudes between 7,500 to 13,100 feet above sea level," +
            "preferring temperate and mountainous areas."
        ];
        function init() {
            initMap();
            window.onresize = function(event) {
                drawMap()
            }
        }

        init();

        function drawMap() {
            var data = google.visualization.arrayToDataTable([
                ['Country', 'Population (in thousands)'],
                ['Argentina', 500],
                ['United States', 300],
                ['Bolivia', 700],
                ['Chile', 600],
                ['Peru', 600],
                ['Ecuador', 600],
                ['Australia', 400],
                ['Mexico', 200],
                ['Russia', 300],
                ['England', 100]
            ]);

            var options = {};
            options['dataMode'] = 'regions';
            options['keepAspectRatio'] = 'true';
            options['backgroundColor'] = 'transparent';

            var container = document.getElementById('gmaps');
            var geomap = new google.visualization.GeoChart(container);

            geomap.draw(data, options);
        }

        function initMap() {
            google.charts.load('current', {
                'packages':['geomap']
            });

            google.charts.setOnLoadCallback(drawMap);
        }
    }
})();