import logo from './logo.svg';
import './App.css';

function App() {
  
  const apiKey = '0416392f-b1f5-4318-af0c-2586c336c1ec'
  const apiCall = `http://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key=${apiKey}`
  
  
  return (
    <div className="App">
      <h1>Allergy app</h1>
    </div>
  );
}

export default App;
