/**
 * Created by vishruthkrishnaprasad on 12/9/17.
 */

(function () {
    angular
        .module("LlamaApp")
        .controller("DevController", devController);

    function devController() {
        var vm = this;
        vm.pages = [
            "Developer: Has the metadata of the website and the information about the developer.",

            "Home: is the home page for navigation through the Llama website. It has 4 buttons/icons which are ANIMATED" +
            " to swing outwards mimicking a web. It contains the below four pages. When the page is displayed on a " +
            "smaller screen, the buttons/icons spread out vertically thereby taking up lesser screen width." +
            " Motive: To display animation skills of the developer.",

            "Nutrition: contains a table of the type of food and intake llamas usually have. " +
            "Motive: To display table styling skills of the developer.",

            "Map: Gives an idea of the whereabouts of llama and its general population in the world along with the" +
            " adaptations they have gone through. Motive: To display GeoChart and Google Map skills of the developer.",

            "Wiki: Educates the user on the taxonomy of the animal along with some fun facts of Llama." +
            " Motive: To display colour transition skills, creativity in shaping content in a ul and div tag.",

            "Quiz: A fun interactive game for the user to learn more about Llamas with scores declared after " +
            "answering all 10 questions with the questions where the user had given wrong answers. " +
            "The quiz fetches questions from the server which contains the questions and answers thereby hiding " +
            "the answers from the user." +
            " Motive: To display creativity in making sure user absorbs the knowledge about Llamas and use of" +
            " bootstrap and angular elements for responsiveness and design. To also display use of RESTful API to" +
            " communicate with the server."
        ];

        function init() {

        }

        init();
    }
})();