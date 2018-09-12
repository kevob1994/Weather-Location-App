import React, { Component } from 'react'
import WeatherLocation from './WeatherLocation';


export default class LocationList extends Component {
    render(){
        return ( 
            <div>
                <WeatherLocation city={'Caracas,ve'}/>
                <WeatherLocation city={'Buenos Aires,ar'}/>
                <WeatherLocation city={'Bogotá,col'}/>
            </div>
        )
    }
}