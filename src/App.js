import React, { Component } from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "a0f8f4887d1f30b96d0b5c63934a53e6";

class App extends Component {
  state = {
    temp: undefined,
    feels_like: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    error: undefined
  };

  gettingWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();

      this.setState({
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        feels_like: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        error: "Введите название города"
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form onClick={this.gettingWeather} />
                <Weather
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  feels_like={this.state.feels_like}
                  pressure={this.state.pressure}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
