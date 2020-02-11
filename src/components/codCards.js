import React, { useState } from 'react';
import styled from 'styled-components';

const CodCards = ({ playerData }) => {
  return (
    <h1>{playerData.default.data.title}</h1>
  )
}

export default CodCards;