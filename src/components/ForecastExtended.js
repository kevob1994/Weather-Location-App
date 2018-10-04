import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';

// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes',
//     'Sabado',
//     'Domingo'
// ]

// const data = {
//     temperature: '10',
//     weatherState: 'normal',
//     humidity: '10',
//     wind: 'normal',
// }
const api_key = '5d7305879e8ef1df27543cedf1bb072c';
const url = "https://api.openweathermap.org/data/2.5/forecast"

export default class ForecastExtended extends Component {
    constructor(props){
        super(props);
        this.state = {
            city: this.props.city,
            forecastData: null
        }
    }

    componentDidMount() {
        const { city } = this.state
		const api_forecast = `${url}?q=${city}&appid=${api_key}`;
        fetch(api_forecast).then(data => {
			return data.json();
		}).then( weather_data => {
			console.log(weather_data)
		});
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({city:nextProps.city});
        }
    }

    renderForecastItemsDays = () => {
        return( 
            // days.map((day) => (<ForecastItem  weekDay={day} hour={10} data= {data}/>))
            "Render Items"
            )
    }

    renderProgress = () => {
        return "Cargando pronostico extendido"
    }

    render() {
        
        const { city } = this.props
        const { forecastData } = this.props
        return (
            <div>
               <h2 className="forecast-title">Pronóstico Extendido para {city}</h2> 
                {forecastData ?
                    this.renderForecastItemsDays() :
                    this.renderProgress()
                }
            </div>
        )
  }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}