/**
 * Created by vishruthkrishnaprasad on 12/9/17.
 */

(function () {
    angular
        .module("LlamaApp")
        .controller("MapController", mapController);
    function mapController($location) {
        var vm = this;
        console.log("entered map")
    }
})();