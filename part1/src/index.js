import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const now = new Date();
    console.log(now);
    const a = 5;
    const b = 37;
    return (
        <>
            <Hello name="world"/>
            <Hello name="test"/>
            <p>The current date is {now.toString()}</p>
            <p>{a} plus {b} is {a + b}</p>
        </>
    )
}

const Hello = (props) => {
    return (
        <>
            <p>Hello {props.name}!</p>
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));