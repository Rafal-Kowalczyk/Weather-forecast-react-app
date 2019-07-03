import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

const APIKey = 'c02075f9ac66ca3d3c7405901f558f90'

class App extends Component {

  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    error: false,
  }

   handleInputChange = (e) => {
     this.setState({
       value: e.target.value
     })
   }

  handleCitySubmit = (e) => {
    e.preventDefault()

    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

    fetch(API)
    .then(response => {
      if(response.ok) {
        return response
      }
      throw Error('Odpowiedź z serwera uniemożliwia przejście dalej.')
    })
    .then(response => response.json())
    .then(data => {
      const time = new Date().toLocaleString()
      this.setState(prevState => ({
        error: false,
        date: time,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        city: prevState.value,
      }))
    })
    .catch(error => {
      this.setState(prevState => ({
        error: true,
        city: prevState.value
      }))
    })
  }

  render () {
    return (
      <div className="App">
        <div className="viewApp">
          <h1>Sprawdź pogodę dla Twojego miasta</h1>
          <Form
            value={this.state.value}
            change={this.handleInputChange}
            submit={this.handleCitySubmit}
          />
          <Result weather={this.state}/>
        </div>
      </div>
    );
  }
}

export default App;