import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from '../../../constants/weathers';
import './styles.css';

export default class WeatherTemperature extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { temperature } = this.props;
		let { weatherState } = this.props;
		return (
			<div className="weatherTemperatureCont">
				{this.getWeatherIcon(weatherState)}
				<span>{` ${temperature} C°`}</span>
			</div>
		);
	}

	stateToIconName = (weatherState) => {
		switch (weatherState) {
			case CLOUD:
				return 'cloud';
			case CLOUDY:
				return 'cloudy';
			case SUN:
				return 'day-sunny';
			case RAIN:
				return 'rain';
			case SNOW:
				return 'snow';
			case WINDY:
				return 'windy';
			default:
				return 'day-sunny';
		}
	};

	getWeatherIcon = (weatherState) => {
		return <WeatherIcons name={this.stateToIconName(weatherState)} size="2x" />;
	};
}

WeatherTemperature.propTypes = {
	temperature: PropTypes.number.isRequired,
	weatherState: PropTypes.string.isRequired,
};
