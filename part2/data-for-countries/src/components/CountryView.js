import React from 'react'
import Weather from './Weather'

const CountryView = ({ country }) => {

    return (
        <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h2>Language{country.languages.length > 1 ? "s" : ""}</h2>
            <ul>
                {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
            </ul>
            <img src={country.flag} alt={"flag of " + country.name} width="200" />
            <h2>Weather in {country.capital}</h2>
            <Weather city={country.capital} />
        </div>
    );
}

export default CountryView