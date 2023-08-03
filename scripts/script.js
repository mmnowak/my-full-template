const question = document.getElementById('card-question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const scoreCount = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: '<img src="assets/images/tarot/fool.jpg" alt="The Fool"></img>',
        choice1: 'Good luck, karma, life cycles, destiny, a turning point',
        choice2: 'Hope, faith, purpose, renewal, spirituality',
        choice3: 'Beginnings, innocence, spontaneity, a free spirit',
        choice4: 'Completion, integration, accomplishment, travel',
        answer: 3
    },

    {
        question: '<img src="assets/images/tarot/magician.jpg" alt="The Magician"></img>',
        choice1: 'Manifestation, resourcefulness, power, inspired action',
        choice2: 'Spiritual wisdom, religious beliefs, conformity, tradition, institutions',
        choice3: 'Shadow self, attachment, addiction, restriction, sexuality',
        choice4: 'Endings, change, transformation, transition',
        answer: 1
    },

    {
        question: '<img src="assets/images/tarot/priestess.jpg" alt="The High Priestess"></img>',
        choice1: 'Femininity, beauty, nature, nurturing, abundance',
        choice2: 'Intuition, sacred knowledge, divine feminine, the subconscious mind',
        choice3: 'Soul-searching, introspection, being alone, inner guidance',
        choice4: 'Positivity, fun, warmth, success, vitality',
        answer: 2
    },

    {
        question: '<img src="assets/images/tarot/empress.jpg" alt="The Empress"></img>',
        choice1: "Soul-searching, introspection, being alone, inner guidance",
        choice2: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions",
        choice3: "Femininity, beauty, nature, nurturing, abundance",
        choice4: "Illusion, fear, anxiety, subconscious, intuition",
        answer: 3
    },

    {
        question: '<img src="assets/images/tarot/emperor.jpg" alt="The Emperor"></img>',
        choice1: "Authority, establishment, structure, a father figure",
        choice2: "Control, willpower, success, action, determination",
        choice3: "Fairness, truth, cause and effect, law",
        choice4: "Manifestation, resourcefulness, power, inspired action",
        answer: 1
    },

    {
        question: '<img src="assets/images/tarot/hierophant.jpg" alt="The Hierophant"></img>',
        choice1: "Soul-searching, introspection, being alone, inner guidance",
        choice2: "Hope, faith, purpose, renewal, spirituality",
        choice3: "Completion, integration, accomplishment, travel",
        choice4: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions",
        answer: 4
    },

    {
        question: '<img src="assets/images/tarot/lovers.jpg" alt="The Lovers"></img>',
        choice1: "Femininity, beauty, nature, nurturing, abundance",
        choice2: "Positivity, fun, warmth, success, vitality",
        choice3: "Love, harmony, relationships, values alignment, choices",
        choice4: "Balance, moderation, patience, purpose",
        answer: 3
    },

    {
        question: '<img src="assets/images/tarot/chariot.jpg" alt="The Chariot"></img>',
        choice1: "Fairness, truth, cause and effect, law",
        choice2: "Hope, faith, purpose, renewal, spirituality",
        choice3: "Balance, moderation, patience, purpose",
        choice4: "Control, willpower, success, action, determination",
        answer: 4
    },

    {
        question: '<img src="assets/images/tarot/strenghth.jpg" alt="Strength"></img>',
        choice1: "Completion, integration, accomplishment, travel",
        choice2: "Courage, persuasion, influence, compassion",
        choice3: "Control, willpower, success, action, determination",
        choice4: "Fairness, truth, cause and effect, law",
        answer: 2
    },

    {
        question: '<img src="assets/images/tarot/hermit.jpg" alt="The Hermit"></img>',
        choice1: "Endings, change, transformation, transition",
        choice2: "Illusion, fear, anxiety, subconscious, intuition",
        choice3: "Soul-searching, introspection, being alone, inner guidance",
        choice4: "Intuition, sacred knowledge, divine feminine, the subconscious mind",
        answer: 3
    },

    {
        question: '<img src="assets/images/tarot/wheel.jpg" alt="The Wheel of Fortune"></img>',
        choice1: "Completion, integration, accomplishment, travel",
        choice2: "Endings, change, transformation, transition",
        choice3: "Courage, persuasion, influence, compassion",
        choice4: "Good luck, karma, life cycles, destiny, a turning point",
        answer: 4
    },

    {
        question: '<img src="assets/images/tarot/justice.jpg" alt="Justice"></img>',
        choice1: "Authority, establishment, structure, a father figure",
        choice2: "Balance, moderation, patience, purpose",
        choice3: "Fairness, truth, cause and effect, law",
        choice4: "Shadow self, attachment, addiction, restriction, sexuality",
        answer: 3
    },

    {
        question: '<img src="assets/images/tarot/hanged.jpg" alt="The Hanged Man"></img>',
        choice1: "Endings, change, transformation, transition",
        choice2: "Pause, surrender, letting go, new perspectives",
        choice3: "Illusion, fear, anxiety, subconscious, intuition",
        choice4: "Soul-searching, introspection, being alone, inner guidance",
        answer: 2
    },

    {
        question: '<img src="assets/images/tarot/death.jpg" alt="Death"></img>',
        choice1: "Sudden change, upheaval, chaos, revelation, awakening",
        choice2: "Shadow self, attachment, addiction, restriction, sexuality",
        choice3: "Rebirth, inner calling, absolution",
        choice4: "Endings, change, transformation, transition",
        answer: 4
    },

    {
        question: '<img src="assets/images/tarot/temperance.jpg" alt="Temperance"></img>',
        choice1: "Control, willpower, success, action, determination",
        choice2: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions",
        choice3: "Balance, moderation, patience, purpose",
        choice4: "Pause, surrender, letting go, new perspectives",
        answer: 3
    },

    {
        question: '<img src="assets/images/tarot/devil.jpg" alt="The Devil"></img>',
        choice1: "Endings, change, transformation, transition",
        choice2: "Shadow self, attachment, addiction, restriction, sexuality",
        choice3: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions",
        choice4: "Intuition, sacred knowledge, divine feminine, the subconscious mind",
        answer: 2
    },

    {
        question: '<img src="assets/images/tarot/tower.jpg" alt="The Tower"></img>',
        choice1: "Sudden change, upheaval, chaos, revelation, awakening",
        choice2: "Rebirth, inner calling, absolution",
        choice3: "Illusion, fear, anxiety, subconscious, intuition",
        choice4: "Fairness, truth, cause and effect, law",
        answer: 1
    },

    {
        question: '<img src="assets/images/tarot/star.jpg" alt="The Star"></img>',
        choice1: "Beginnings, innocence, spontaneity, a free spirit",
        choice2: "Positivity, fun, warmth, success, vitality",
        choice3: "Good luck, karma, life cycles, destiny, a turning point",
        choice4: "Hope, faith, purpose, renewal, spirituality",
        answer: 4
    },

    {
        question: '<img src="assets/images/tarot/moon.jpg" alt="The Moon"></img>',
        choice1: "Illusion, fear, anxiety, subconscious, intuition",
        choice2: "Love, harmony, relationships, values alignment, choices",
        choice3: "Intuition, sacred knowledge, divine feminine, the subconscious mind",
        choice4: "Femininity, beauty, nature, nurturing, abundance",
        answer: 1
    },

    {
        question: '<img src="assets/images/tarot/sun.jpg" alt="The Sun"></img>',
        choice1: "Good luck, karma, life cycles, destiny, a turning point",
        choice2: "Positivity, fun, warmth, success, vitality",
        choice3: "Beginnings, innocence, spontaneity, a free spirit",
        choice4: "Authority, establishment, structure, a father figure",
        answer: 2
    },

    {
        question: '<img src="assets/images/tarot/judgement.jpg" alt="Judgement"></img>',
        choice1: "Rebirth, inner calling, absolution",
        choice2: "Completion, integration, accomplishment, travel",
        choice3: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions",
        choice4: "Fairness, truth, cause and effect, law",
        answer: 1
    },

    {
        question: '<img src="assets/images/tarot/world.jpg" alt="The World"></img>',
        choice1: "Good luck, karma, life cycles, destiny, a turning point",
        choice2: "Manifestation, resourcefulness, power, inspired action",
        choice3: "Sudden change, upheaval, chaos, revelation, awakening",
        choice4: "Completion, integration, accomplishment, travel",
        answer: 4
    },
];

 function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    scoreCount.innerText = 0 + '/22';
    getNewCard();
 }

 function getNewCard() {
    if (availableQuestions.length === 0) {return window.location.assign('/end.html')};

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex]
    console.log(currentQuestion);
    question.innerHTML = currentQuestion.question;
    choices.forEach((choice) => {
        const option = choice.dataset['option'];
        choice.innerText = currentQuestion['choice' + option]
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
 };

 choices.forEach((choice) => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['option'];

        const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

      $(selectedChoice).addClass(classToApply);

      classToApply === "correct" ? incrementScore(1) : console.log("incorrect answer");

      setTimeout(() => {
            $(selectedChoice).removeClass(classToApply);
        getNewCard();
    }, 600)
    });
 });

 // SCORE

 function incrementScore(num) {
    score += num;
    scoreCount.innerText = score + '/22';
 }

  startGame();

