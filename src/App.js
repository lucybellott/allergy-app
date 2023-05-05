import {useEffect, useState} from 'react'
import './App.css';

function App() {
  
  const apiKey = '0416392f-b1f5-4318-af0c-2586c336c1ec'
  const apiCall = `http://api.airvisual.com/v2/city?city=Los%20Angeles&state=California&country=USA&key=${apiKey}`
  
  
const [info, setInfo] = useState({})

 
  useEffect(() => {
    fetch(`${apiCall}`)
    .then(resp => resp.json())
    .then(data => {
        setInfo(data.data)
    })
    }, [])

    console.log(info.current.pollution.aqius)

   

 
  return (
    <div className="App">
      <h1>Air app</h1>
      <div className="city">
        {info.city}
      </div>
      <div className="air-quality">
        <p>air quality index</p>
        {info.current.pollution.aqius}
      </div>
    </div>
  );
}

export default App;
