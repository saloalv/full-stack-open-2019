import React from 'react';
import CountryView from './CountryView'
import CountryList from './CountryList'

const ResultView = ({ data, setCountry }) => {
  if (data.length === 0) {
    return (
      <div>
        Type in the text box to search for a country
      </div>
    );
  } else if (data.length === 1) {
      //console.log(data)
    return <CountryView country={data[0]} />
  } else if (data.length < 10) {
    return <CountryList countries={data} setCountry={setCountry} />;
  } else {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    );
  }
}

export default ResultView