/**
 * Created by vishruthkrishnaprasad on 12/9/17.
 */

(function () {
    angular
        .module("LlamaApp")
        .controller("QuizController", quizController);

    function quizController(QuizService) {
        var vm = this;
        vm.score = false;
        vm.points = 0;
        vm.completed = false;
        vm.nextQuestion = nextQuestion;
        vm.wronganswers = [];

        var totalsubmits = 10;

        function init() {
            getQuestions();
        }

        init();

        function getQuestions() {
            var promise = QuizService.findQuestions();
            promise.success(function (questions) {
                vm.questions = questions;
            });
        }

        function nextQuestion(bool, question) {
            if(bool === 1 && question.answer) {
                vm.points += 1;
            }
            else if(bool === 2 && !question.answer) {
                vm.points += 1;
            }
            else{
                vm.wronganswers.push(question)
            }
            question.val = false;
            totalsubmits--;

            if (!totalsubmits) {
                vm.score = true;
                vm.completed = true;
            }
        }
    }
})();
