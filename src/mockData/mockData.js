export const lesson = {
  name: 'Test Title',
  questions: [
    {
      question: 'Which is NOT a planet?',
      reading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      answers: [{answer: 'Pluto', correct: true}, {answer: 'Venus', correct: false}, {answer: 'Jupiter', correct: false}, {answer: 'Mars', correct: false}]
    },
    {
      question: 'What is an adjective?',
      reading: null,
      answers: [{answer: 'like a Pronoun', correct: false}, {answer: 'Adverb', correct: false}, {answer: 'Verb', correct: false}, {answer: 'Words that describe a noun', correct: true}]
    }
  ]
}

export const teacherLesson = {
    name: 'North American Mammals',
    questions: [
      {desc: 'What is the largest North American Mammal',
        reading: 'Today we learned about North American Mammals, how cool!',
        answers:[
          {
            desc: 'Dolphin',
            correct: false,
          },
          {
            desc: 'Grizzly Bear',
            correct: false,
          },
          {
            desc: 'Bison',
            correct: true,
          },
          {
            desc: 'Mountain Lion',
            correct: false
          }
        ]
      }
    ]
}