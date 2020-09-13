export const lesson = {
  name: 'Test Title',
  id: 123123,
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

export const student = {id: 42, first_name: 'Willie', last_name: 'Nelson'}

export const teacher = {id: 12, first_name: 'Valerie', last_name: 'Frizzle'}

export const lesson2 = {
    name: 'North American Mammals',
    questions: [
      {question: 'What is the largest North American Mammal',
        reading: 'Today we learned about North American Mammals, how cool!',
        answers:[
          {
            answer: 'Dolphin',
            correct: false,
          },
          {
            answer: 'Grizzly Bear',
            correct: false,
          },
          {
            answer: 'Bison',
            correct: true,
          },
          {
            answer: 'Mountain Lion',
            correct: false
          }
        ]
      }
    ]
}

export const student1 = {
  teacher: 1,
  id: 1,
  first_name: 'Bilbo',
  last_name: 'Baggins'
}

export const student2 = {
  teacher: 1,
  id: 2,
  first_name: 'Jack',
  last_name: 'Sparrow'
}

export const student3 = {
  teacher: 1,
  id: 3,
  first_name: 'Tilda',
  last_name: 'Swinton'
}