import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import GiphCard from '../components/giphyList'

const GiphyWidget = () => {

  // set state 
  const [searchTerm, getSerchTerm] = useState('');
  const [giphs, updateDisplayedGiphs] = useState([]);
 
  // make api call
  const getGiphs = () => {
    axios.get('https://api.giphy.com/v1/gifs/search?api_key=BISwto4n0dBvOntMJKTzqYYhUeZp6bam&q='+searchTerm+'&limit=9&offset=0&rating=R&lang=en')
    .then(response => {
      updateDisplayedGiphs(response.data.data)
    }).catch(err => console.log(err));
  }

  const handleInput = (e) => {
    getSerchTerm(e.target.value)
  }

  return (
    <GiphContainer>
      <h1>Find A Gif</h1>
        <input placeholder="Search for a gif" onChange={handleInput} />
        <button onClick={getGiphs}>Search</button>
      <CardContainer>
        {giphs.map((giph, i) => (
            <GiphCard giph={giph} key={i} />
          ))}
      </CardContainer>
    </GiphContainer>
  )
}

const GiphContainer = styled.div`
border-top: 1.1px solid lightgrey;
margin-top: 2%;
text-align: center;
  h1 {
    font-size: 1.5em;
    font-weight: 500;
  }
input {
  border: none;
  padding: 15px;
  background-color: #ededed;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  &:focus {
    outline: none;
  }
}
button {
  padding: 15px 50px;
  border: none;
  background-color: pink;
  color: white;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: dodgerblue;
    transition: 400ms;
    cursor: pointer;
  }
}
`
const CardContainer = styled.div`
margin: 2% 0; 
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
`

export default GiphyWidget;