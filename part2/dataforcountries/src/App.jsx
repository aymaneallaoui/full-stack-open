import { useEffect, useState } from 'react'

import Choice from './components/Choice'
import axios from 'axios'

const App = () => {

  const [country, setCountry] = useState('')
  const [result, setResult] = useState([])



  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setResult(response.data)
      })
  }, [])


  const handleCountryChange = (event) => {
    setCountry(event.target.value)
  }


  return (
    <div>
      <form>
        find countries <input value={country} onChange={handleCountryChange} />
      </form>
      <div>
        <Choice key={result.id} result={result} country={country} />
      </div>
    </div>
  )
}

export default App;