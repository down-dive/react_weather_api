import './App.css';
import React, { useState } from 'react';
import { render } from '@testing-library/react';


// function App() {
//   const [weather, setWeather] = useState("");
//   const [icon, setIcon] = useState("")


//   const getWeather = () => {

//   fetch("https://api.openweathermap.org/data/2.5/forecast?q=Sunnyvale&appid=b20a0c8394f0e460f879d6303c6f83ca&&units=metric")
//   .then((response) => response.json()
//   .then((data) => {
//       setWeather(Math.round(data.list[0].main.temp_min )+ "," + Math.round(data.list[0].main.temp_max))
//       console.log(data.list[0].weather[0].icon)
//     })
//     .then((data) => {
//       setIcon(data.list[0].weather[0].icon)
//     })
//   )
// }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>React Weather API</h1>
//       </header>
//       <body className="App-body">
//         {/* <p>Testing CSS flexbox</p> */}
//         <button className="App-button" onClick={getWeather}>Get your Weather Right Now</button>

//         <div className="weather-1">Today's weather:</div>
//         <div>{weather}</div>
//         <img src="http://openweathermap.org/img/wn/${setIcon}10d@2x.png"></img>
//       </body>
//     </div>
//   );
// }

let data
let temp

class App extends React.Component {
  constructor(props) {
    super(props);

      const getWeather = () => {

  let apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + "Sunnyvale"+ "&units=imperial&exclude=,daily&appid=b20a0c8394f0e460f879d6303c6f83ca"

  fetch(apiURL)
  // fetch("https://api.openweathermap.org/data/2.5/forecast?q=Sunnyvale&appid=b20a0c8394f0e460f879d6303c6f83ca&&units=metric")
  .then((response) => response.json()
  .then((data) => {
      // setWeather(Math.round(data.list[0].main.temp_min )+ "," + Math.round(data.list[0].main.temp_max))
      console.log(data.list[0].weather[0].icon)
      let temp = data.list[0].main.temp_min
    })
    // .then((data) => {
    //   setIcon(data.list[0].weather[0].icon)
    // })
  )
}

    this.state = {
      dayOne: temp
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.dayOne}</p>
      </div>
    )
  }
}

export default App;
