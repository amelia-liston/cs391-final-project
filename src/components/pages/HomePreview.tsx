import { Link } from "react-router";
import styled from "styled-components"

const StyledDiv = styled.div`
    text-align: center;
`;

const StyledImg = styled.img`
    max-width: 50%;
    margin-bottom: 2vw;
`;


export default function HomePreview() {

    return (
      <StyledDiv>
        <StyledImg src="minecraft-logo-3.svg" alt="minecraft logo"></StyledImg><br></br>
        <Link className="minecraft-button" to={`/QuizStart`}>Play</Link>
        {/* <button className="minecraft-btn mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200">Click me!</button> */}


      </StyledDiv>
    )
  }