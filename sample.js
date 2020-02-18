'use strict';
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      questionHead: 'Question 1/5',
      question: 'Which realm of the Earth did the God Hades reign over?',
      picture: 'https://images.squarespace-cdn.com/content/v1/58a2939a15d5dbaa30d8c8f8/1493535879754-KI6B0V9M2FIKI8TF20EC/ke17ZwdGBToddI8pDm48kFTEgwhRQcX9r3XtU0e50sUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcW7uEhC96WQdj-SwE5EpM0lAopPba9ZX3O0oeNTVSRxdHAmtcci_6bmVLoSDQq_pb/image-asset.jpeg',
      alt: 'Hades seated in his throne with his three headed pet cerberus',
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
      alt: 'The goddess of love being showered by her angel babies',
      answers: [
        'Aphrodite',
        'Freyja',
        'Hathor',
        'Wendigo'
      ],
      correctAnswer: 'Aphrodite'
    },
    {
      questionHead: 'Question 3/5',
      question: 'Which Greek wrote the classic epic, The Illiad?',
      picture: 'https://cdn.britannica.com/72/133972-050-9F4E1129/Procession-of-the-Trojan-Horse-canvas-Troy-1760.jpg',
      alt: 'Depiction of the battle of troy, including a trojan horse',
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
      question: 'Which mythological hero put Cerberus to sleep?',
      picture: 'https://www.sothebys.com/content/dam/stb/lots/N09/N09869/025N09869_9PYHK.jpg.thumb.500.500.png',
      alt: 'Our Hero using his lyre to put to sleep cerberus',
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
      question: 'What substance is known as the "Nectar of the Gods?"',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Golden_Apple_of_Discord_by_Jacob_Jordaens.jpg',
      alt: 'Painting of the Gods sharing food and drink',
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

function render() {
  // will render pages based upon quiz starting and quesiton number
  if (STORE.quizStarted=== false) {
    renderLanding();
  } else if(STORE.questionNumber < 5) {
    renderQuestion();
  } else {
    renderFinal();
  }
}
function renderLanding() {
  //This will prep the quiz structure for insertion of information from store / other functions
  $('.ship').html(generateLanding());
}

function renderQuestion() {
  // will render quesiton page and call the radio select event handler
  $('.ship').html(generateQuestion());
  radioSelect();
}

function renderCorrectResults() {
  // will render inccorect results page
  $('.ship').html(generateCorrectResults());
}

function renderIncorrectResults() {
  // will render incorrect results page
  $('.ship').html(generateIncorrectResults());
}

function renderFinal() {
  // will render summary/final page
  $('.ship').html(generateFinal());
}

function generateLanding() {
  // this will generate html for landing page
  return `<header aria-label="Greek Mythology Quiz, Set Sail Sailor">
       <h1>Greek Mythology Quiz</h1>
       <h2>Set Sail Sailor!</h2>
    </header>
    <img src="https://www.scalehobbyist.com/images/products/ZVE/ZVE00008514/ZVE00008514_0_l.jpg" alt="Greek triremes setting sail on ocean waters"></img>
    <h3 aria-label="Do you accept this challenge?">Do you dare to challenge your intelligence on Ancient Greece?</h3>
    <h4>If so...</h4>
    <form id="submitpage">
     <label for="start" aria-label="Begin your Adventure">Begin your Adventure!</label><br><br>
     <input type="submit" id="start" value="Embark!"></input>
    </form>`;

    
  
}

function generateQuestion() {
  //This will generate HTML for the questions.
  const questionVar = STORE.questions[STORE.questionNumber];
  return `
  <header>
   <h1>${questionVar.questionHead}</h1>
   <h2>Your current score is ${STORE.score} out of 5.</h2>
  </header>
   <img src="${questionVar.picture}" alt="${questionVar.alt}"></img>
   <h3>${questionVar.question}</h3>
   <form id="getResult">
     <label for="start"></label>
     <input type="radio" class="radio" id="radio1" aria-label="${questionVar.answers[0]}" name="radio1" value="${questionVar.answers[0]}" /> 
     <label for="radio1">${questionVar.answers[0]}</label><br></br>
     <input type="radio" class="radio" id="radio2" aria-label="${questionVar.answers[1]}" name="radio1" value="${questionVar.answers[1]}"/>
     <label for="radio2">${questionVar.answers[1]}</label><br></br>
     <input type="radio" class="radio" id="radio3" aria-label="${questionVar.answers[2]}" name="radio1" value="${questionVar.answers[2]}"/> 
     <label for="radio3">${questionVar.answers[2]}</label><br></br>
     <input type="radio" class="radio" id="radio4" aria-label="${questionVar.answers[3]}" name="radio1" value="${questionVar.answers[3]}"/> 
     <label for="radio4">${questionVar.answers[3]}</label><br></br>
     <input type="submit" id="resultChecker" value="Check!"></input>
   </form>`;
}

function generateCorrectResults() {
  // This will generate correct results html
  return `
    <header>
     <h1>Correct!</h1>
     <h2>You're a genius!</h2>
     <h3>Your current score is ${STORE.score} out of 5.</h3>
    </header>
    <img class= "resultpage" src="https://www.pngkey.com/png/full/300-3004290_comedy-mask-copy-greek-theater-mask-templates.png" alt="Greek comedy mask is happy for you!"><br>
    <form id="get-results">
      <label for="start">Keep going!</label><br><br>
      <input type="submit" id="start" value="Continue!">
    </form> `;

}

function generateIncorrectResults() { 
  // This will generate inccorrect results html
  const questionVar = STORE.questions[STORE.questionNumber];
  return `
   <header> 
     <h1>Incorrect...</h1>
     <h2>Oops! The correct answer was:</h2>
     <h3 class="incorrect">"${questionVar.correctAnswer}"</h3>
     <h4>Your current score is ${STORE.score} out of 5.</h4>
  </header>
  <img class= "resultspage" src="https://imagizer.imageshack.com/img922/7299/GXmzX5.png" alt="Greek tradgedy set is not happy with you..."><br>
  <form id="get-results">
    <label for="start">Keep going!</label><br><br>
    <input type="submit" id="start" value="Continue!">
  </form>`;
}

function generateFinal() {
  //This will hold HTML for the summary
  return `
   <header>
      <h1>You have completed your Journey!</h1>
      <h2>You got ${STORE.score} out of 5 correct.</h2>
   </header>
   <img src="https://i.pinimg.com/originals/9e/be/e1/9ebee12a561dd53e785ff73df902faca.jpg" alt="Greek triremes setting sail on ocean waters"><br>
   <h3>Are you satisfied with yourself? If not...</h3>
   <form id="restart1">
     <label for="restart">Restart Your Adventure!</label><br><br>
     <input type="submit" id="restart" value="Re-Embark!">
   </form>`;
}

function startQuiz() {
  //This will be the button press on the renderLanding that will bring you to the first question
  $('#submitpage').submit( event => {
    event.preventDefault();
    STORE.quizStarted = true;
    render();
  });
}

function nextQuestionButton() {
  //This function will look for the event click on next button on results page, prevents default submit and renders next questions while incrementing questionnumber 
  $('#get-results').submit(event => {
    event.preventDefault();
    STORE.questionNumber++;
    if (STORE.questionNumber < 5) {
      render(); 
      radioSelect();
    } else {
      render();
      resetButton();
    }
  });
  // this function will also incriment quesitonNumber by 1
  // on click we will renderQuestion
}

function radioSelect() {
  //Once quiz options are chosen, this function will contain the information on what choice was selected in the question.
  $('#getResult').submit(event => {
    event.preventDefault();
    const questionVar = STORE.questions[STORE.questionNumber];
    if ($('input[type="radio"]:checked').val() === questionVar.correctAnswer) {
      STORE.score++;
      renderCorrectResults();
      nextQuestionButton();
    }
    else if ($('input:radio', this).is(':checked')) { 
      renderIncorrectResults();
      nextQuestionButton();
    } 
  });
}



function resetButton() {
  //This function has an event handler that will reset the quiz for a restart
  $('form').submit( event => {
    event.preventDefault();
    STORE.questionNumber = 0;
    STORE.score = 0;
    STORE.quizStarted = false;
    console.log('restarted');
    render();
    startQuiz();
  });
  

}

function handleQuiz() {
  //This function calls all functions in order to run the entire quiz
  render();
  startQuiz();
  radioSelect();
}
  
$(handleQuiz);