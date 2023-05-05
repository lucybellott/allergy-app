import {useEffect, useState} from 'react'
import './App.css';

function App() {
  
  const apiKey = '0416392f-b1f5-4318-af0c-2586c336c1ec'
  const apiCall = `http://api.airvisual.com/v2/city?city=Los%20Angeles&state=California&country=USA&key=${apiKey}`
  
  
const [airIfo, setInfo] = useState({})

 
  useEffect(() => {
    fetch(`${apiCall}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })
    }, [])



    // curl --request GET \
    //  --url 'https://api.openaq.org/v2/cities?limit=100&page=1&offset=0&sort=asc&order_by=city' \
    //  --header 'accept: application/json'

 
  return (
    <div className="App">
      <h1>Air app</h1>
      <div></div>
    </div>
  );
}

export default App;
