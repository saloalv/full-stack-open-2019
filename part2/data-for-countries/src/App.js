import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ResultView from './components/ResultView'

function App() {

  const [country, setCountry] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
    if (country.length > 0) {
      Axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(response => setData(response.data), () => setData([]))
    } else {
      setData([]);
    }
  }, [country]);

  //console.log(data);

  return (
    <div>
      Find countries <input value={country} onChange={(event) => setCountry(event.target.value)} />
      <ResultView data={data} setCountry={setCountry} />
    </div>
  );
}

export default App;
