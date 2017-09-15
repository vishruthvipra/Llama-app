/**
 * Created by vishruthkrishnaprasad on 7/2/17.
 */
(function() {
    angular
        .module("LlamaApp")
        .config(Config);

    function Config($routeProvider, $httpProvider) {

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';

        $routeProvider
            .when("/home", {
                templateUrl: "views/homepage.html",
                controller: "HomeController",
                controllerAs: "model"
            })
            .when("/llama_map", {
                templateUrl: "views/map.html",
                controller: "MapController",
                controllerAs: "model"
            })
            .when("/nutrition", {
                templateUrl: "views/nutrition.html",
                controller: "NutritionController",
                controllerAs: "model"
            })
            .when("/quiz", {
                templateUrl: "views/quiz.html",
                controller: "QuizController",
                controllerAs: "model"
            })
            .when("/encyclopedia", {
                templateUrl: "views/encyclopedia.html",
                controller: "EncyclopediaController",
                controllerAs: "model"
            })
            .when("/dev", {
                templateUrl: "views/developer.html",
                controller: "DevController",
                controllerAs: "model"
            })
            .otherwise({
                templateUrl: "views/homepage.html"
            });
    }
})();