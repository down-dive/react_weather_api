import { Axios } from 'axios';
import './App.css';
import {useState} from 'react';

function App() {
  const [weather, setWeather] = useState("");


  const getWeather = () => {

  //   Axios.get("https://api.openweathermap.org/data/2.5/forecast?q=Sunnyvale&appid=b20a0c8394f0e460f879d6303c6f83ca").then(
  //     (response) => {
  //       console.log(response)
  //     }
  //   )
  // }

  fetch("https://api.openweathermap.org/data/2.5/forecast?q=Sunnyvale&appid=b20a0c8394f0e460f879d6303c6f83ca")
  .then((response.json())
  .then((data) => {
      console.log(response)
    })
  )
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather API</h1>
      </header>
      <body>
        <button onClick={getWeather}>Get your Weather Right Now</button>
      </body>
    </div>
  );
}

export default App;
