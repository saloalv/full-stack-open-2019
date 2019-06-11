import React from 'react'
import Course from './components/Course'

const courses = [{
  name: 'Half Stack application development',
  parts: [{
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }]
},
{
  name: 'Node.js',
  parts: [
    {
      name: 'Routing',
      exercises: 3,
      id: 1
    },
    {
      name: 'Middlewares',
      exercises: 7,
      id: 2
    }
  ]
}];

const App = () => {
  return (
    <div>
      <h1>Webdev curriculum</h1>
      {courses.map(course => <Course course={course}/>)}
    </div>
  );
}



export default App