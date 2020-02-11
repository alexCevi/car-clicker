import React, { useState, useEffect } from 'react'
import moment from 'moment'
import styled from 'styled-components'

const Clock = () => {
    
    const [time, updateTime] = useState(Date.now())

    useEffect(() => {
        var interval = setInterval(() => {
            updateTime(Date.now())
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    })

    return (
    <ClockText>{ moment(time).format('h:mm:ss a') }</ClockText>
    )

}

const ClockText = styled.p`
    font-weight: 900;
`

export default Clock