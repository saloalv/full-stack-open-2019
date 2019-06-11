import React from 'react';

const Course = ({course}) => {
    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Header = props => {
    return (
        <div>
            <h2>{props.course.name}</h2>
        </div>
    );
}

const Content = props => {
    return props.parts.map(part =>
        <Part name={part.name} exercises={part.exercises} key={part.name}/>
    );
}

const Part = (props) => {
    let { name, exercises } = props;
    return <div>
        {name} {exercises}
    </div>;
}

const Total = props => {
    const parts = props.parts;
    return <div>
        <b>total of {parts.reduce((counter, part) => counter + part.exercises, 0)} exercises</b>
    </div>;
}

export default Course