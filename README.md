# gumberoo

## Abstract

This project was completed for the Turing School of Software and Design module 4 Capstone Project. This project goal was to work with collaboratively with back-end and front-end students to deliver an MVP of our design with a new technology stretch goal. Bill Wilke, after seeing his partner, an elementary educator, struggle to find software that was both easily accessible and well formatted for her students, came up with the idea for gumberoo. The goals of the MVP were to create a platform where elementary educators could create assessments of their own choosing, and generate a link to drop into their virtual classrooms. The scores would be retrieved for the teacher to view. 

Our stretch goals on the FE were to implement Hooks/Redux within the React framework, and on the BE to use the Python language with Django/PostGresSQL, and an external API. We are happy to say that we achieved our MVP and much more. On the FE while working through the project we decided to address every accessibility concern we could within the time frame allotted. The assessments come in a colorblind-friendly palette designed by the esteemed creative director of the Broad Institute at MIT, Bang Wong. Assessments are written in the open-source OpenDyslexia font, and are completely mobility and screenreader friendly. Included as well, are animations with reassuring sentiments being said to help anxious students along the way. Upon a student’s completion of an assessment, they can submit how they are feeling and the message is run through IBM's Watson tone-analyzer AI system and the analytics are sent back to the teacher, along with the number of correct answers a student submitted, and their message. 

There were many challenges to this project, with React Hooks, we had some trouble working specifically with the useEffect hook.  One particular issue we had was that it was making multiple GET requests and updating the store accordingly so we would end up with twice as much data as needed.  We had to do some debugging and realized that the useEffect wasn’t the right thing to use in this case. Redux thunks also proved to be difficult.  Since the syntax is so different than a typical GET request we had to make sure all of our actions dispatched properly and that the calls were made at the right time.  In addition, mocking out thunk calls in our tests was a challenge. Lastly, we faced a lot of styling issues with our deployed app.  We found that some of the styling we made was not rendering the same on the deployed app and had to constantly push our changes to see them accurately in the production build.  Styling in the devTools of the deployed app was helpful here but there were still some changes that we didn’t expect. For future iterations we hope to implement some type of rewards system for the students and more animations.

## Contributors

### FE
- [Bill Wilke](https://github.com/Billwilke42)
- [Kyle Wong](https://github.com/kylewong2510)
- [Melissa VanKempen](https://github.com/melizzo)

## BE 
 - [Derek Borski](https://github.com/dborski)
 - [Melanie Tran](https://github.com/Lithnotep)
 - [Max Mitrani](https://github.com/melatran)


## Deployed

### FE
https://gumberoo.netlify.app/

### BE 
https://gumberoo-backend.herokuapp.com

## Technologies Used on this Repo
- React
- React Hooks
- Redux
- Redux Thunk
- SASS
- Git
- JavaScript
- React Testing Library
- React Router
- Jest
- Eslint

## Setup


1. Clone down this repo https://github.com/gumberoo/gumberoo

3. Get into the repo by running```cd gumberoo``` in your terminal

4. Then install the library dependencies. Run in your terminal:

```bash
npm install
```

5. Run `npm start` in your terminal. 

6. Go to `http://localhost:3000/` in your browser and you should see the page!

7. When ready to quit hit `ctrl + c` in your terminal to stop the server.


## GIF's

### Making an Assessment
![Make an assessment](https://media.giphy.com/media/pmKMGFz0ey6RHBGDkO/giphy.gif)

### Viewing Student Data
![Viewing students](https://media.giphy.com/media/1B6L3I4ECbBQD6DiiU/giphy.gif)
### Viewing Lesson Data
![Make assessment](https://media.giphy.com/media/QEuoSsTlrqVluQkxJm/giphy.gif)

### Student Assessment
![Student Assessment](https://media.giphy.com/media/AznicNmSwCYfu9Irr1/giphy.gif)
### Submitting Mood for AI system
![Submit mood](https://media.giphy.com/media/eTTZ11voxTYrvy5mQe/giphy.gif)
