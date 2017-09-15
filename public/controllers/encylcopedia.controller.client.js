/**
 * Created by vishruthkrishnaprasad on 12/9/17.
 */

(function () {
    angular
        .module("LlamaApp")
        .controller("EncyclopediaController", encyclopediaController);
    function encyclopediaController() {
        var vm = this;
        vm.wiki = [
            "Llamas are members of the camelid, or camel, family.",

            " Camelids first appeared on the Central Plains of North America about 40 million years ago." +
            "About 3 million years ago, llamas' ancestors migrated to South America.",

            "Llamas were first domesticated and used as pack animals 4,000 to 5,000 years ago by Indians " +
            "in the Peruvian highlands.",

            "Llamas can grow as much as 6 feet tall.",

            "Llamas weigh 280 to 450 pounds and can carry about a quarter of their body weight," +
            "so a 400-pound male llama can carry about 100 pounds on a trek of 10 to 12 miles with no problem.",

            "Llamas know their own limits. If you try to overload a llama with too much weight," +
            "the llama is likely to lie down or simply refuse to move.",

            "In the Andes Mountains of Peru, llama fleece has been shorn and used in textiles for about 6,000 years." +
            "Llama wool is light, warm and water-repellent.",

            "Llamas are hardy and well suited to harsh environments.",

            "Llamas are smart and easy to train.",

            "Llamas are vegetarians and have efficient digestive systems."
        ];
        vm.classification = [
            "Kingdom: Animalia",
            "Phylum: Chordata",
            "Class: Mammalia",
            "Order: Artiodactyla",
            "Family: Camelidae",
            "Genus: Lama",
            "Species: L. glama"
        ];

        function init() {

        }

        init();
    }
})();








