import React, { Component } from 'react';
import WeatherTemperature from './weatherTemperature';
import WeatherExtraInfo from './weatherExtraInfo';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from '../../../constants/weathers';
import './styles.css';

let letra = 'Hola mundo';

export default class WeatherData extends Component {
	render() {
		console.log(letra);
		return (
			<div className="weatherDataCont">
				<WeatherTemperature temperature={20} weatherState={CLOUDY} />
				<WeatherExtraInfo humidity={80} wind={'10m/s'} />
			</div>
		);
	}
}
