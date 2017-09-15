/**
 * Created by vishruthkrishnaprasad on 20/2/17.
 */
module.exports = function (app) {
    app.get("/api/quiz/", findQuestions);
    var questions = [
        {
            question: "Q1. Llamas are members of the camelid, or camel, family.",
            val: true,
            answer: true
        },
        {
            question: "Q2. Llamas don't bite. They spit when they're agitated, but that's mostly at each other.",
            val: true,
            answer: true
        },
        {
            question: "Q3. Llamas have two wild 'cousins' that have never been domesticated: the vicuña and the guanaco.",
            val: true,
            answer: true
        },
        {
            question: "Q4. Llamas live to be about 50 years old.",
            val: true,
            answer: false
        },
        {
            question: "Q5. Yarn made from llama fiber is soft and lightweight, yet remarkably warm.",
            val: true,
            answer: true
        },
        {
            question: "Q6. Average height of a llama is 8 feet tall.",
            val: true,
            answer: false
        },
        {
            question: "Q7. A group of llamas is called a herd.",
            val: true,
            answer: true
        },
        {
            question: "Q8. Llamas are an endangered species.",
            val: true,
            answer: false
        },
        {
            question: "Q9. Llamas are carnivorous in winter",
            val: true,
            answer: false
        },
        {
            question: "Q10. Llamas are generally about twice the size of alpacas",
            val: true,
            answer: true
        }
    ];

    function findQuestions(req, res) {
        res.send(questions);
    }
};




