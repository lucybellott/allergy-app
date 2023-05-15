import React from 'react';
import {useEffect, useState} from 'react'
import './App.css';
//import {Doughnut} from 'react-chartjs-2';

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

    console.log(info)

   

 
  return (
    <div className="App">
      <h1>Air quality app</h1>
      <input className='search-bar' placeholder='Search city'></input>
      <div className="city">
        <p>Los Angeles</p>
        {/* {info.city} */}
      </div>
      <div className="air-quality">
        <p>air quality index</p>
        {/* {info.current.pollution.aqius} */}
        <p>22</p>
        <p>Status: Fair</p>
      </div>
      <div className="temp">
        <p>Temp</p>
        {/* {info.city} */}
        <p>65F</p>
      </div>
    </div>
  );
}

export default App;
