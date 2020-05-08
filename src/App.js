import React, { Fragment, Component } from 'react';
import Buttons from './components/Buttons'

import './App.css';
import sun from './icons/sun.svg'
import cloudy from './icons/cloudy.svg'
import rain from './icons/rain.svg'
import partially from './icons/partially.svg'
import mist from './icons/mist.svg'
import snow from './icons/snow.svg'
import thunderstorm from './icons/thunder.svg'

export default class App extends Component{
  constructor() {
    super()
    this.state = {
      city: '',
      temperature: '',
      humidity: '',
      tempMax: '',
      tempMin: '',
      country: '',
      description: '',
      icon: partially,
      keyApi: '63fec1c16f57810186a23ffac273b9f9'
    }
  }

  async callingAPI(id) {
    let api = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${this.state.keyApi}`
    const res = await fetch(api)
    const data = await res.json() 
    this.setState({
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      tempMax: data.main.temp_max,
      tempMin: data.main.temp_min,
      country: data.sys.country,
      description: data.weather[0].description
    })
    this.colorBackground(this.state.temperature)
    this.iconUpdate(this.state.description)
  }

  componentDidMount() {
    this.callingAPI('5128581')
  }

  colorBackground = (temperature) => {
    if (temperature > 295) document.body.style = 'background: linear-gradient(to right, #ff5e62, #ff9966);'
    else if (temperature > 284 && temperature < 295) document.body.style = 'background: linear-gradient(to right, #2F80ED, #56CCF2);'
    else document.body.style = 'background: linear-gradient(to right, #004e92, #000428);'
  }

  newYork = () => {
    this.callingAPI('5128581')
  }

  beijing = () => {
    this.callingAPI('1816670')
  }

  mumbai = () => {
    this.callingAPI('1275339')
  }

  mexicoCity = () => {
    this.callingAPI('3530597')
  }

  deutschland = () => {
    this.callingAPI('2950158')
  }

  iconUpdate = (des) => {
      if (des === 'clear sky') this.setState({ icon: sun })
      else if (des === 'few clouds') this.setState({ icon: partially })
      else if (des === 'scattered clouds') this.setState({ icon: cloudy })
      else if (des === 'broken clouds') this.setState({ icon: cloudy })
      else if (des === 'shower rain') this.setState({ icon: rain })
      else if (des === 'rain') this.setState({ icon: rain })
      else if (des === 'light rain') this.setState({ icon: rain })
      else if (des === 'thunderstorm') this.setState({ icon: thunderstorm })
      else if (des === 'snow') this.setState({ icon: snow })
      else if (des === 'mist') this.setState({ icon: mist })
      else if (des === 'haze') this.setState({ icon: mist })
  }
 
  render() {
    return (
      <Fragment>
        <div className="container">
          <Buttons 
            newYork={ this.newYork }
            beijing={ this.beijing }
            mumbai={ this.mumbai }
            mexicoCity={ this.mexicoCity }
            deutschland={ this.deutschland }
          />
        </div>
          <div className="location"> 
            <div className="country">{ this.state.country }</div>
            <div className="city">{ this.state.city }</div>
            <img src={this.state.icon} height="150" width="150" className="img"/>
          </div>
          <div className="temperature">
            <div className="degrees">{ (this.state.temperature -  273.15).toFixed(1) } °C</div>
            <div className="humidity">Humidity: { this.state.humidity }%</div>
          </div>
          <div className="description">{ this.state.description }</div>
      </Fragment>
    );
  }
}

