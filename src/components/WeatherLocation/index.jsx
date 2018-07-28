import React, { Component } from 'react';
import Location from './location';
import WeatherData from './WeatherData';

export default class WeatherLocation extends Component {
	render() {
		return (
			<div>
				<Location city="Venezuela" />
				<WeatherData />
			</div>
		);
	}
}
