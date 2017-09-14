/**
 * Created by vishruthkrishnaprasad on 12/9/17.
 */

(function () {
    angular
        .module("LlamaApp")
        .controller("NutritionController", nutritionController);
    function nutritionController($location) {
        var vm = this;
        console.log("entered nutrtion")
    }
})();
