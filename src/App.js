import React, {useState} from "react";
import axios from "axios";

function App() {
  const [data, setData]= useState({});
  const [location, setLocation]= useState("");

  const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=73ef434355341c84e80c235ce8e5a5ac`
 
  const  searchLocation = (event) =>{
    if(event.key === "Enter"){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation("");
    }
  }
    
  
  return (
    <div className="app">
      <div className="search">
    <input
    value={location}
    onChange={event => setLocation(event.target.value)}
    onKeyUp={searchLocation}
    placeholder="Enter Location Name"
    type="text"
    />
      </div>
    <diV className="container">
      <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
        </div>
        <div className="Description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>
      { data.name !== undefined && 
      <div className="bottom">
      <div className="feels-like">
        <p>Feels Like</p>
        {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°C</p> : null}
      </div>
      <div className="Humidity">
      <p>Humidity</p>
      {data.main ? <p className="bold">{data.main.humidity}%</p>: null}
      </div>
      <div className="wind-speed">
      <p>Wind-Speed</p>
      {data.wind ? <p className="bold">{((data.wind.speed)*3.6).toFixed()} KM/H</p> : null}
      </div>
    </div>
      }
      
    </diV>
    </div>
  );
}

export default App;
