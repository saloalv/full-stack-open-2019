import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)



    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={() => setGood(good + 1)} >good</button>
            <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
            <button onClick={() => setBad(bad + 1)}>bad</button>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

const Statistics = ({ good, neutral, bad }) => {

    const total = good + neutral + bad

    if (!total) { // <-- abusing JS falsey value
        return <div>
            <h1>statistics</h1>
            No feedback given
        </div>
    }

    const average = (good - bad) / (total); // neutral is not used, since it would be adding by 0
    const positive = good / (total);

    return (
        <div>
            <h1>statistics</h1>
            good {good} <br />
            neutral {neutral} <br />
            bad {bad} <br />
            average {average} <br />
            positive {positive * 100} % <br />
        </div>
    );
}

ReactDOM.render(<App />,
    document.getElementById('root')
)