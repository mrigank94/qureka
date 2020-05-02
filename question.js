function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
}

function Question(id, text, choices, answer) {
    this.id = id;
    this.text = text;
    this.choices = choices;
    this.answer = answer;

    let isCorrectAnswer = (choice) => {
        return choice === this.answer;
    };

    this.calculateScore = function (choice) {
        console.log('Calculating score for question');
        const isCorrect = isCorrectAnswer(choice);
        return isCorrect ? 10 : 0;
    }
}

function CricketQuestion(id, text, choices, answer) {
    Question.call(this, id, text, choices, answer);

    /*Use arrow function to prevent rebinding of this.
    * Since this method is now extended, we have to make isCorrectAnswer a public, or duplicate it in sub classes*/
    let isCorrectAnswer = (choice) => {
        return choice === this.answer;
    };

    let difficultyFactor = 2;

    this.calculateScore = function (choice) {
        console.log('Calculating score for cricket');
        const isCorrect = isCorrectAnswer(choice);
        return isCorrect ? difficultyFactor * 10 : 0;
    };
}

extend(CricketQuestion, Question);

function PoliticsQuestion(id, text, choices, answer) {

    let isCorrectAnswer = (choice) => {
        return choice === this.answer;
    };

    Question.call(this, id, text, choices, answer);

    let difficultyFactor = 3;

    this.calculateScore = function (choice) {
        console.log('Calculating score for politics');
        const isCorrect = isCorrectAnswer(choice);
        return isCorrect ? difficultyFactor * 10 : 0;
    };
}

extend(PoliticsQuestion, Question);




