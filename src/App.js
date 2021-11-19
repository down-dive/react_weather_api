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

  fetch("https://api.openweathermap.org/data/2.5/forecast?q=Sunnyvale&appid=b20a0c8394f0e460f879d6303c6f83ca&&units=metric")
  .then((response) => response.json()
  .then((data) => {
      setWeather(data.list[0].main.temp_min + "," + data.list[0].main.temp_max)
    })
  )
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather API</h1>
      </header>
      <body>
        <button className="App-button" onClick={getWeather}>Get your Weather Right Now</button>
        {weather}
      </body>
    </div>
  );
}

export default App;
