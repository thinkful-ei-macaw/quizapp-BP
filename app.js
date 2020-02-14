/**
 * Example store structure
 */
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

function render() {
  if (STORE.quizStarted === false) {
    $(renderLanding);
  }
}

function renderLanding() {
  $('.ship').html(
    `<header>
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
    </div>`);
  renderQuestionOnClick();
  
  console.log('landed');
}
$(renderLanding);

function generateQuestionHTML(){
  $('.ship').html(
    `<header>
       <h1>${STORE[STORE.questionNumber]}</h1>
       <h2>${STORE['question 1']}</h2>
    </header>
    <div><img src="https://images.squarespace-cdn.com/content/v1/58a2939a15d5dbaa30d8c8f8/1493535879754-KI6B0V9M2FIKI8TF20EC/ke17ZwdGBToddI8pDm48kFTEgwhRQcX9r3XtU0e50sUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcW7uEhC96WQdj-SwE5EpM0lAopPba9ZX3O0oeNTVSRxdHAmtcci_6bmVLoSDQq_pb/image-asset.jpeg" alt="The Greek God Hades relaxing with his beloved pet dogbeast cerberus"></img>
    <p></p>
    <form id="submitpage">
     <h2>Do you dare challenge your intelligence on Ancient Greece?</h2>
     <label for="start">Begin your Adventure!</label>
     <input type="submit" id="start" value="Embark!"></input>
    </form>
    </div>`);

}
function renderQuestionOnClick() {
  $('#submitpage').submit( event => {
    event.preventDefault();
    console.log('wow you guys made it this far');
    STORE.questionNumber++;
    
    console.log();
    $(generateQuestionHTML);
  
  }
  );
}


/** //This function will render the landing page
//This function also listens for an event on the submit button to call renderQuestion1
renderQuestion1
//This function renders the renderQuesiton1 page
//This function also listens for which answer selection is selected
//This function also listens for an event on the submit button to callrenderResults based upon the previous section
renderResults 1/toggle correct or incorrect
//This function renders the results page
//This function renders correct or incorrect based on the selections on the question page
renderQuestion2
//This function renders the renderQuesiton1 page
//This function also listens for which answer selection is selected
//This function also listens for an event on the submit button to callrenderResults based upon the previous section

renderNewResults 1/toggle correct or incorrect

renderQuestion3
//This function renders the renderQuesiton1 page
//This function also listens for which answer selection is selected
//This function also listens for an event on the submit button to callrenderResults based upon the previous section

renderNewResults 1/toggle correct or incorrect

renderQuestion4
//This function renders the renderQuesiton1 page
//This function also listens for which answer selection is selected
//This function also listens for an event on the submit button to callrenderResults based upon the previous section

renderNewResults 1/toggle correct or incorrect

renderQuestion5
//This function renders the renderQuesiton1 page
//This function also listens for which answer selection is selected
//This function also listens for an event on the submit button to callrenderResults based upon the previous section


renderSummaryPage

renderLandingPage

/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */ 
