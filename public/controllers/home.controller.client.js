/**
 * Created by vishruthkrishnaprasad on 12/9/17.
 */

(function () {
    angular
        .module("LlamaApp")
        .controller("HomeController", homeController);
    function homeController($location) {
        var vm = this;
        console.log("entered home")
    }
})();