import React, {useState} from 'react';
import * as codData from '../assets/codStats.json';
import styled from 'styled-components';
import CodCards from '../components/codCards';

const CodDashboard = () => {

  const [gamerTags, getGamerTags] = useState({
    playerOne: 'test 1 ',
    playerTwo: 'test 2'
  });
  const [isVisable, updateVisibility] = useState(false);

  const handleInput = e => {
    let name = e.target.name;
    let val = e.target.value;
    getGamerTags({...gamerTags, [name]: val});
  }

  const getData = () => {
    console.log(codData)
    updateVisibility(true);
  }

  const placeholderTxt = 'Activision gamertag#24346';

  return (
    <DashContainer>
      <h2>Who Is More Trash?</h2>
      <div className="search-row">
          <input onChange={handleInput} name="playerOne" placeholder={placeholderTxt} />
          <input onChange={handleInput} name="playerTwo" placeholder={placeholderTxt}/>
      </div>
      <button onClick={getData}>Peep Stats</button>
      {isVisable && <CodCards playerData={codData}/>}
    </DashContainer>
  )
}

const DashContainer = styled.div `
  margin-bottom: 30%;
  h2 {
    text-align: center;
  }
  .search-row {
    display: flex;
    justify-content: space-evenly;
  }
  button {
    margin: auto;
    display: block;
    margin-top: 50px;
  }
`

export default CodDashboard;
