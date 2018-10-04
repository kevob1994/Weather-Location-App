import React, { Component } from 'react'
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData'


export default class ForecastItem extends Component {

    constructor({ weekDay, hour, data }){
        super()
        this.state = {
            weekDay,
            hour,
            data
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({city:nextProps.city});
        }
    }

    render () {
        let {weekDay, hour, data} = this.state;

        return(
            <div>
            <div>{weekDay} Hora: {hour} hs</div>
            <WeatherData data= {data} />
            </div>
        )
    }
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hora: PropTypes.number.isRequired,
    data: PropTypes.shape({
		temperature: PropTypes.number.isRequired,
		weatherState: PropTypes.string.isRequired,
		humidity: PropTypes.number.isRequired,
		wind: PropTypes.string.isRequired,
	}),
}