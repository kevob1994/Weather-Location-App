import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class WeatherExtraInfo extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { humidity } = this.props;
		const { wind } = this.props;

		return (
			<div className="weatherExtraInfoCont">
				<span>{`${humidity} % - `}</span>
				<span>{`${wind} wind`}</span>
			</div>
		);
	}
}

WeatherExtraInfo.propTypes = {
	humidity: PropTypes.number.isRequired,
	wind: PropTypes.string.isRequired,
};
