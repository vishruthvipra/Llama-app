/**
 * Created by vishruthkrishnaprasad on 12/9/17.
 */

(function () {
    angular
        .module("LlamaApp")
        .controller("QuizController", quizController);
    function quizController($location) {
        var vm = this;
        console.log("entered quiz")
    }
})();
