/**
 * Created by vishruthkrishnaprasad on 11/2/17.
 */
(function() {
    angular
        .module("LlamaApp")
        .factory("QuizService", quizService);

    function quizService($http) {

        var api = {
            "findQuestions": findQuestions
        };

        return api;

        function findQuestions() {
            return $http.get("/api/quiz/");
        }
    }
})();