import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const incGood = () => { setGood(good + 1) };
    const incNeutral = () => { setNeutral(neutral + 1) };
    const incBad = () => { setBad(bad + 1) };

    return (
        <div>
            <h1>give feedback</h1>
            <Button text="good" onClick={incGood} />
            <Button text="neutral" onClick={incNeutral} />
            <Button text="bad" onClick={incBad} />
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
    const positivePercentage = (positive * 100) + "%";

    return (
        <div>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <Statistic text="good" value={good} />
                    <Statistic text="neutral" value={neutral} />
                    <Statistic text="bad" value={bad} />
                    <Statistic text="all" value={total} />
                    <Statistic text="average" value={average} />
                    <Statistic text="positive" value={positivePercentage} />
                </tbody>
            </table>
        </div>
    );
}

const Button = ({ text, onClick }) => {
    return <button onClick={onClick} >{text}</button>
}

const Statistic = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)