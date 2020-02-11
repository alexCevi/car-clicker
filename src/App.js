import React, { useState } from 'react';
import styled from 'styled-components';
import Upgradelist from './components/upgradeslist';

function App() {
  const [currentClicks, updateTotalClicks] = useState(0);
  const [testing, updateTesting] = useState('');

	const handleClick = () => {
		updateTotalClicks(currentClicks => currentClicks + 1);
	};

	return (
		<AppContainer>
			<ThirdsContainer>
				<button onClick={handleClick}>{currentClicks}</button>
        {currentClicks}
			</ThirdsContainer>
			<ThirdsContainer></ThirdsContainer>
			<ThirdsContainer>
        <Upgradelist />
      </ThirdsContainer>
		</AppContainer>
	);
}

const AppContainer = styled.div`
	display: flex;
	flex-direction: row;
`;
const ThirdsContainer = styled.div`
	border: 1px solid red;
	width: 50%;
`;

export default App;
