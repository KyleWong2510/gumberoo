export const lesson = {
  id: 3,
  name: '',
  description: '',
  questions: [
    {
      reading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      desc: 'Which is NOT a planet?',
      answers: [{desc: 'Pluto', correct: true}, {desc: 'Venus', correct: false}, {desc: 'Jupiter', correct: false}, {desc: 'Mars', correct: false}]
    },
    {
      reading: null,
      desc: 'What is an adjective?',
      answers: [{desc: 'like a Pronoun', correct: false}, {desc: 'Adverb', correct: false}, {desc: 'Verb', correct: false}, {desc: 'Words that describe a noun', correct: true}]
    },
    // {
    //   reading: null,
    //   desc: 'What is electricity?',
    //   answers: ['Rocks in th ground?','A city where people live', 'a boom', 'A form of energy']
    // }
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