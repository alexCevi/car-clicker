import React, { useState } from 'react';
import styled from 'styled-components';

const Upgradelist = () => {

  let testing = ['test 1', 'test 2', 'test 3'];

  const handleClick = (key) => {
    console.log(key)
  }

  return (
    <div>
      {testing.map((text, i) => (
        <p onClick={() => handleClick(text)} key={i} >{text}</p>
      ))}
    </div>
  )
}

export default Upgradelist;