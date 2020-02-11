import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import WeatherDisplayBox from '../components/weatherDisplay';

const WeatherWidget = () => {
	const [zipCode, updateZipCode] = useState('');
	const [weatherData, updateWeatherData] = useState([]);
	const [isVisable, updateVisibility] = useState(false);

	const getWeather = () => {
		if (zipCode) {
			axios
				.get(
					`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=7654dcd198eeb12f1a0b54236064e046`
				)
				.then(response => {
					updateWeatherData(response.data);
					updateVisibility(true);
				})
				.catch(err => console.log(err));
		} else {
			alert('type in a zip code nerd');
		}
	};

	const handleInput = e => {
		updateZipCode(e.target.value);
	};

	return (
		<WeatherDiv>
			<h1>Weather Boi</h1>
			<div className="search-container">
				<input
					placeholder="Enter a zip code"
					onChange={handleInput.bind(this)}
					value={zipCode}
				/>
				<button onClick={getWeather}>
					<i className="material-icons">search</i>
				</button>
			</div>
			{isVisable && <WeatherDisplayBox weatherData={weatherData} />}
		</WeatherDiv>
	);
};

const WeatherDiv = styled.div`
	width: 55%;
	display: flex;
	flex-direction: column;
	h1 {
		font-size: 1.5em;
		color: #8a8e93;
	}
	.search-container {
		border: 1px solid #f5f5f5;
		display: flex;
		border-radius: 30px;
		justify-content: space-between;
		width: 80%;
		-webkit-box-shadow: 0 4px 13px -9px black;
		-moz-box-shadow: 0 4px 13px -9px black;
		box-shadow: 4px 13px -9px black;
	}
	input {
		border: none;
		padding: 15px 15px;
		width: 100%;
		background-color: transparent;
		&:focus {
			outline: none;
		}
	}
	button {
		border: none;
		background-color: transparent;
		color: #4285f4;
		padding: 10px 15px;
		text-align: right;
		&:hover {
			cursor: pointer;
		}
		&:focus {
			outline: none;
		}
	}
`;

export default WeatherWidget;
