// Component made by Kristine Peters

import { useEffect, useState } from "react";
import { Link } from "react-router";
import styled from "styled-components"

const StyledDiv = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;gap: 1rem;
`;

const LogoContainer = styled.div`
    position: relative;
    width: fit-content;
    display: inline-block;
    padding-bottom: 2rem;
`;

const StyledImg = styled.img`
    max-width: 50%;
    margin-bottom: 2vw;
    
    @media screen and (max-width:750px) { 
        max-width: 90%;

    }
`;

const StyledYellowText = styled.img`
    max-width: 20%;
    position: absolute;
    top: 2%;
    left: 60%;
    rotate: -15deg;
    animation: grow-animation 4s infinite alternate;


    @media screen and (max-width: 1000px) {
        max-width: 20%;
        top: 2%;
        left: 60%;
  }

    @media screen and (max-width: 750px) {
        max-width: 28%;
        top: 15%;
        left: 70%;
    }

    @media screen and (max-width: 500px) {
        max-width: 40%;
        top: 32%;
        left: 52%;
        rotate: -10deg;
    }
`;


export default function HomePreview() {
    const [text, setText] = useState('yellowText/1.svg');
    const yellowText = ['yellowText/1.svg', 'yellowText/2.svg', 'yellowText/3.svg', 'yellowText/4.svg', 
    'yellowText/5.svg', 'yellowText/6.svg', 'yellowText/7.svg', 'yellowText/8.svg', 'yellowText/9.svg', 
    'yellowText/10.svg', 'yellowText/11.svg', 'yellowText/12.svg', 'yellowText/13.svg', 'yellowText/14.svg',
    'yellowText/15.svg','yellowText/16.svg','yellowText/17.svg','yellowText/18.svg','yellowText/19.svg',
    'yellowText/20.svg','yellowText/21.svg','yellowText/22.svg','yellowText/23.svg','yellowText/24.svg'];

    useEffect(() => {
        try {
            setText(() => yellowText[Math.floor(Math.random() * yellowText.length)]);
            // console.log(yellowText.length)
            console.log(Math.random() * yellowText.length)
            console.log(yellowText[Math.floor(Math.random() * yellowText.length)]);
            console.log(text);
    
        }
        catch {
            setText('yellowText/1.svg')
        }
        }, []
    );

    return (
        <>
            <StyledDiv>
                <LogoContainer>
                    <StyledImg src="minecraft-logo-3.svg" alt="minecraft logo"></StyledImg><br></br>
                    <StyledYellowText src={text} alt={text} />
                </LogoContainer>
        
                <Link className="minecraft-button" to={`/QuizStart`}>Play</Link>
                <Link className="minecraft-button" to={`/QRCode`}>Play Along</Link>
                {/* <button className="minecraft-btn mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200">Click me!</button> */}
                <Link className="minecraft-button" to={`/About`}>About</Link>
            </StyledDiv>
        </>
    )
  }