'use strict';
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      questionHead: 'Question #1',
      question: 'Question One: Which mythological realm did the God Hades reign over?',
      picture: 'Pic',
      answers: [
        'The skies',
        'The seas',
        'The underworld',
        'The wilderness'
      ],
      correctAnswer: 'The underworld'
    },
    {
      questionHead: 'Question #2',
      question: 'Which goddess was the goddess of love in Greek mythology?',
      picture: 'pic',
      answers: [
        'Aphrodite',
        'Freja',
        'Hathor',
        'Wendigo'
      ],
      correctAnswer: 'Aphrodite'
    },
    {
      questionHead: 'Question #3',
      question: 'Which greek wrote the classic epic, The Illiad?',
      picture: 'pic',
      answers: [
        'Plato',
        'Stephen King',
        'Socrates',
        'Homer'
      ],
      correctAnswer: 'Homer'
    },
    {
      questionHead: 'Question #4',
      question: 'Which mythological hero put Cereberus to sleep?',
      picture: 'pic',
      answers: [
        'Hercules',
        'Orpheus',
        'Jason',
        'Oedipus'
      ],
      correctAnswer: 'Orpheus'
    },
    {
      questionHead: 'Question #5',
      question: 'What is known as the "Nectar of the Gods?',
      picture: 'pic',
      answers: [
        'Ichor',
        'Wine',
        'Ambrosia',
        'Olive oil'
      ],
      correctAnswer: 'Ambrosia'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};


function renderLanding() {
  //This will prep the quiz structure for insertion of information from store / other functions
  $('.ship').html(generateLanding());
}

function generateLanding() {
  //This will hold HTML for the start page.
}

function generateQuestion() {
  //This will hold HTML for the questions.
}

function generateResults() {
  //This will hold HTML for the results, use if / else statement to determine which result to display.
}

function generateFinal() {
  //This will hold HTML for the summary
}

function startQuiz() {
  //This will be the button press on the renderLanding that will bring you to the first question
}

function nextQuestion() {
  //This function will look for current question, and the information in STORE and place in generateQuestion, after the button is clicked
}

function updateScore() {
  //This function will increment the STORE for correct answers by 1 if the answer chosen is correct, and if not it will not increment. If / else
}

function updatePage() {
  //This will increment the current page number on the STORE object.
}

function buttonSelect() {
  //Once quiz options are chosen, this function will contain the information on what choice was selected in the question.
}

function resetButton() {
  //This puts all store values back to 0
}

function handleQuiz() {
  //This function calls all functions in order to run the entire quiz
}