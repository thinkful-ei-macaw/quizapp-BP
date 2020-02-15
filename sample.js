'use strict';
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      questionHead: 'Question 1/5',
      question: 'Question One: Which mythological realm did the God Hades reign over?',
      picture: 'https://images.squarespace-cdn.com/content/v1/58a2939a15d5dbaa30d8c8f8/1493535879754-KI6B0V9M2FIKI8TF20EC/ke17ZwdGBToddI8pDm48kFTEgwhRQcX9r3XtU0e50sUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcW7uEhC96WQdj-SwE5EpM0lAopPba9ZX3O0oeNTVSRxdHAmtcci_6bmVLoSDQq_pb/image-asset.jpeg',
      answers: [
        'The skies',
        'The seas',
        'The underworld',
        'The wilderness'
      ],
      correctAnswer: 'The underworld'
    },
    {
      questionHead: 'Question 2/5',
      question: 'Which goddess was the goddess of love in Greek mythology?',
      picture: 'https://i0.wp.com/strangeago.com/wp-content/uploads/2018/09/Venus01.jpg?resize=680%2C385&ssl=1" alt="Goddess Aphrodite being admired by her winged baby angels',
      answers: [
        'Aphrodite',
        'Freja',
        'Hathor',
        'Wendigo'
      ],
      correctAnswer: 'Aphrodite'
    },
    {
      questionHead: 'Question 3/5',
      question: 'Which greek wrote the classic epic, The Illiad?',
      picture: 'https://cdn.britannica.com/72/133972-050-9F4E1129/Procession-of-the-Trojan-Horse-canvas-Troy-1760.jpg',
      answers: [
        'Plato',
        'Stephen King',
        'Socrates',
        'Homer'
      ],
      correctAnswer: 'Homer'
    },
    {
      questionHead: 'Question 4/5',
      question: 'Which mythological hero put Cereberus to sleep?',
      picture: 'https://i.pinimg.com/originals/68/09/37/680937588ddb4b82f854074c59fc08f3.png',
      answers: [
        'Hercules',
        'Orpheus',
        'Jason',
        'Oedipus'
      ],
      correctAnswer: 'Orpheus'
    },
    {
      questionHead: 'Question 5/5',
      question: 'What is known as the "Nectar of the Gods?',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Peter_Paul_Rubens_-_The_Fall_of_Phaeton_%28National_Gallery_of_Art%29.jpg/1200px-Peter_Paul_Rubens_-_The_Fall_of_Phaeton_%28National_Gallery_of_Art%29.jpg',
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

function renderQuestion() {
  if (STORE.questionNumber < 5){
    $('.ship').html(generateQuestion());
    buttonSelect();
  } else {
    renderFinal();
  }
}

function renderCorrectResults() {
  $('.ship').html(generateCorrectResults());
}

function renderIncorrectResults() {
  $('.ship').html(generateIncorrectResults());
}

function renderFinal() {
  $('.ship').html(generateFinal());
}
function generateLanding() {
  return `<header>
       <h1>Greek Mythology Quiz</h1>
       <h2>Set Sail Sailor!</h2>
    </header>
    <div><img src="https://www.scalehobbyist.com/images/products/ZVE/ZVE00008514/ZVE00008514_0_l.jpg" alt="Greek triremes setting sail on ocean waters"></img>
    <p></p>
    <form id="submitpage">
     <h2>Do you dare challenge your intelligence on Ancient Greece?</h2>
     <label for="start">Begin your Adventure!</label>
     <input type="submit" id="start" value="Embark!"></input>
    </form>
    </div>`;

    
  
}

function generateQuestion() {
  //This will hold HTML for the questions.
  const questionVar = STORE.questions[STORE.questionNumber];
  return `<header>
  <h1>${questionVar.questionHead}</h1>
  <h2>${questionVar.question}</h2>
  <h3>Your current score is ${STORE.score} out of 5.</h3>
</header>
<div><img src="${questionVar.picture}" alt="The Greek God Hades relaxing with his beloved pet dogbeast cerberus"></img>
<form id="getResult">
<h2>Choose your answer below.</h2>
<label for="start"></label>
<input type="radio" name="answer" value="${questionVar.answers[0]}" /> ${questionVar.answers[0]}
<input type="radio" name="answer" value="${questionVar.answers[1]}" /> ${questionVar.answers[1]}
<input type="radio" name="answer" value="${questionVar.answers[2]}" /> ${questionVar.answers[2]}
<input type="radio" name="answer" value="${questionVar.answers[3]}" /> ${questionVar.answers[3]}
<label for="gettingResult">Check your Adventure!</label>
<input type="submit" id="resultChecker" value="Check!"></input>
</form>
</div>`;
}

function generateCorrectResults() {
  return `'<header>
  <h1>Correct!</h1>
  <h2>You're a genius!</h2>
  <h3>Your current score is ${STORE.score} out of 5.</h3>
</header>
<main><img src="https://i.pinimg.com/originals/43/2d/97/432d97353a5f6e129c7a4440f47597c0.jpg" alt="Greek comedy mask is happy for you!">
<p></p>
<form id="get-results">
  <label for="start">Keep going!</label>
  <input type="submit" id="start" value="Next Question">
</form> 
</main>'`;

}

function generateIncorrectResults() { 
  const questionVar = STORE.questions[STORE.questionNumber];
  return `<header> <h1>Incorrect...</h1>
<h2>Oops! The right answer was ${questionVar.correctAnswer}</h2>
<h3>Your current score is ${STORE.score} out of 5.</h3>
</header>
<main><img src="https://spectator.imgix.net/content/uploads/2018/10/Greek-Tragedy-cover.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=820&h=550" alt="Greek tradgedy set is not happy with you...">
<p></p>
<form id="get-results">
<label for="start">Keep going!</label>
<input type="submit" id="start" value="Next Question">
</form> 
</main>'`;}


function generateFinal() {
  //This will hold HTML for the summary
  return `'<header>
  <h1>You have completed your Journey</h1>
  <h2>We hope you are satisfied with yourself</h2>
  <h3>You got ${STORE.score} out of 5 correct.</h3>
</header>
<main><img src="https://i.pinimg.com/originals/9e/be/e1/9ebee12a561dd53e785ff73df902faca.jpg" alt="Greek triremes setting sail on ocean waters">
<p></p>
<form>
  <label for="start">Restart Your Adventure!</label>
  <input type="submit" id="start" value="Embark!">
</form> 
</main>
<script src="https://code.jquery.com/jquery-3.4.1.slim.js" crossorigin="anonymous"></script>
<script src="app.js"></script>'`;
}

function startQuiz() {
  //This will be the button press on the renderLanding that will bring you to the first question
  $('#submitpage').submit( event => {
    event.preventDefault();
    console.log('wow you guys made it this far');
    renderQuestion();
    
    
  });
}

function nextQuestionButton() {
  //This function will look for the event click on next button on results page
  $('#get-results').submit(event => {
    event.preventDefault();
    console.log('Jesus this is hard');
    STORE.questionNumber = STORE.questionNumber + 1;
    renderQuestion();

  });
  // this function will also incriment quesitonNumber by 1
  // on click we will renderQuestion
}

function endQuiz() {
  //This function will render the results of the quiz.
  
}


function updateScore() {
  //This function will increment the STORE for correct answers by 1 if the answer chosen is correct, and if not it will not increment. If / else
}

function updatePage() {
  //This will increment the current page number on the STORE object.
}

function submitPage(){
  // This function will listen for the submit action on the results page and then 
  //render the next question
}

function buttonSelect() {
  //Once quiz options are chosen, this function will contain the information on what choice was selected in the question.
  $('#getResult').submit(event => {
    event.preventDefault();
    const questionVar = STORE.questions[STORE.questionNumber];
    console.log($('input[type="radio"]:checked').val());
    if ($('input[type="radio"]:checked').val() === questionVar.correctAnswer && $('input:radio', this).is(':checked')) {
      STORE.score++;
      renderCorrectResults();
      nextQuestionButton();
    }
    else if ($('input:radio', this).is(':checked')) { 
      renderIncorrectResults();
      nextQuestionButton();
    } else {
      alert('Please make a selection!')
    }
  });
}

function resetButton() {
  //This puts all store values back to 0
}

function handleQuiz() {
  //This function calls all functions in order to run the entire quiz
  renderLanding();
  startQuiz();
  buttonSelect();
}
  


$(handleQuiz);