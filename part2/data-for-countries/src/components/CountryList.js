import React from 'react'

const CountryList = ({ countries, setCountry }) => {
    return (
        <div>
            {countries.map(country => {
                return <p key={country.name}> {country.name} <button onClick={() => setCountry(country.name)}>show</button></p>
            })}
        </div>
    );
}

export default CountryList