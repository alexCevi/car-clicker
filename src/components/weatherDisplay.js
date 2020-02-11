import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';

// Image imports
import cloudy from '../assets/partly_cloudy.png';
import sunny from '../assets/sunny.png';
import rain from '../assets/rain_light.png';
import brokenAf from '../assets/ultrafastparrot.gif';

const WeatherDisplayBox = ({ weatherData }) => {
	const formatKelvin = tempK => {
		return Math.floor((tempK * 9) / 5 - 459.67);
  };

  const [weatherIcon, getIcon] = useState('');

  useEffect(() => {
    if (weatherData.weather[0].main) {
      switch (weatherData.weather[0].main) {
        case 'Clear':
          getIcon(sunny);
          break;
        case 'Clouds':
          getIcon(cloudy);
          break;
        case 'Rain': 
          getIcon(rain);
          break;
        default:
          getIcon(brokenAf);
      }
    }
  },[weatherData.weather])

	return (
		<DisplayBox>
			<h1>{weatherData.name}</h1>
			<h3>{moment().format('dddd, h:mm a')}</h3>
			<h4>{weatherData.weather[0].main}</h4>
			<div className="inner-row">
				<div className="left">
          <img alt="yeeeet" src={weatherIcon} />
					<h2>
						{formatKelvin(weatherData.main.temp)}
						<span>&#8457;</span>
					</h2>
				</div>
				<div className="right">
					<h4>Cloud Coverage: {weatherData.clouds.all}%</h4>
					<h4>Humidity: {weatherData.main.humidity}%</h4>
					<h4>Wind: {weatherData.wind.speed}mph</h4>
				</div>
			</div>
		</DisplayBox>
	);
};

const DisplayBox = styled.div`
	margin: 30px 0px;
	padding: 25px;
  -webkit-box-shadow: 0 17px 32px -21px black;
	  -moz-box-shadow: 0 17px 32px -21px black;
	  box-shadow: 0 17px 32px -21px black;
	h1 {
		color: #878787;
	}
	h3 {
		color: #878787;
		font-weight: 500;
	}
	h4 {
		color: #878787;
		font-size: 0.8em;
		font-weight: 500;
	}
	.inner-row {
		display: flex;
		flex-direction: row;
	}
	.left {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 60%;
		i {
			color: #878787;
		}
		h2 {
			font-size: 3em;
			margin-left: 20px;
			font-weight: 400;
			display: flex;
			align-items: center;
			span {
				font-size: 0.5em;
				font-weight: 300;
			}
		}
	}
`;

export default WeatherDisplayBox;
