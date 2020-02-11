import React from 'react'
import styled from 'styled-components'

const GiphCard = ({ giph }) => (
  <Card>
    <embed key={giph.id} src={giph.embed_url} />
    <h3>{ giph.title }</h3>
  </Card>
)

const Card = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 350px;
background-color: #ededed;
margin: 5px;
padding: 5px;
text-align: center;

embed {
  width: 100%;
}
`

export default GiphCard;
