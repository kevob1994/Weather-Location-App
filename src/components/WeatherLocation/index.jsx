import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import cyan from '@material-ui/core/colors/cyan';


const api_key = '5d7305879e8ef1df27543cedf1bb072c';
const url = "https://api.openweathermap.org/data/2.5/weather"


// `https://api.openweathermap.org/data/2.5/weather?q=Caracas,ve&appid=5d7305879e8ef1df27543cedf1bb072c`;


export default class WeatherLocation extends Component {
	constructor({ city }) {
		super();
		this.state = {
			city,
			data: null,
		};

		console.log("constructor");
	}

	handleUpdateClick = () => {
		const { city } = this.state
		const api_weather = `${url}?q=${city}&appid=${api_key}`;
		fetch(api_weather).then(data => {
			return data.json();
		}).then( weather_data => {
			const data = transformWeather(weather_data);
			this.setState({data})
		});
	};

	//se ejecuta al iniciar la renderización del component
	componentWillMount = () => {
	  console.log("componentWillMount");

	  this.handleUpdateClick();
	  
	}

	//se ejecuta al finalizar la renderización del component
	componentDidMount = () => {
		console.log("componentDidMount");
	}

	//se ejecuta cada vez que el dom se actualiza
	componentWillUpdate = () => {
		console.log("componentWillUpdate");
	}

	//se ejecuta cada vez que el dom termina de actualizarce
	componentDidUpdate = () => {
		console.log("componentWillUpdate");
	}
	render = () => {
		console.log("render");
		const { city, data } = this.state;
		return (
			<div className="weatherLocationCont">
				<Location city={city} />
				{ data ? <WeatherData data={data} /> : <CircularProgress  style={{ color: cyan[500] }} thickness={7} />}
				{ /*<button onClick={this.handleUpdateClick}>Actualizar</button> */}
			</div>
		);
	}
}

WeatherLocation.propTypes = {
	city: PropTypes.string.isRequired
}