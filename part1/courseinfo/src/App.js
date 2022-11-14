
const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part p1={props.course.parts[0].name} e1={props.course.parts[0].exercises}/>
      <Part p2={props.course.parts[1].name} e2={props.course.parts[1].exercises}/>
      <Part p3={props.course.parts[2].name} e3={props.course.parts[2].exercises}/>
    </div>
  )
  }

const Part = (props) => {
  return (
    <div>
      <p>{props.p1} {props.e1}</p>
      <p>{props.p2} {props.e2}</p>
      <p>{props.p3} {props.e3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamental of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}


  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}
export default App;
