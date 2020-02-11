import React from 'react'
import styled from 'styled-components'

const Hero = ({ title }) => (
    <HeroDiv>
        <div className="container">
            <h1>{ title }</h1>
        </div>
    </HeroDiv>
)

const HeroDiv = styled.section`
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    margin-bottom: 60px;
    background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.7) 0%,
			rgba(0, 0, 0, 0.9) 100%
		), url('${props => props.theme.heroBG}') no-repeat center center;
    background-size: cover;

    h1 {
        font-weight: 900;
    }
`

export default Hero


/*
METHOD 1: OLD SCHOOL
class HeroSecond extends Component {

    constructor() {
        super(props)
        this.state = {
            weather: 71
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1></h1>
            </div>
        )
    }
}
*/


/*
const HeroSecond = () => {
    return (
        <div>
            <h1></h1>
        </div>
    )
}

const HeroSecond = () => (
        <div>
            <h1></h1>
        </div>
)
*/

/*
BEST PRACTICE
import react, { useState, useEffect } from 'react'

const HeroSecond = () => {

    const [weather, setWeather] = useState(71)

    useEffect(() => {
        console.log('Mounted')
        return(() => {
            console.log('Unmounted')
        })
    })

    return (
        <div>

        </div>
    )

    
}
*/