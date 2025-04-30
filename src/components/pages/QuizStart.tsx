// Component made by Kristine Peters

import { Link } from "react-router";
import { styled } from "styled-components";

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    margin: 1vw;
    text-align: center;
    padding: 1vw 7vw 1.5vw 7vw;
    font-size: calc(2px + 2vw);

    @media screen and (max-width: 750px) {
        padding: 4vw 23vw 4.5vw 23vw;
        font-size: calc(2px + 5vw);
        margin: 2vw;
    }
`;

const StyledLink2 = styled(Link)`
    display: flex;
    flex-direction: column;
    margin: 2.5vw 1vw 1vw 1vw;
    text-align: center;
    padding: 1vw 0 1.5vw 0;
    font-size: calc(2px + 1.5vw);
    
    @media screen and (max-width: 750px) {
        padding: 4vw 23vw 4vw 23vw;
        font-size: calc(2px + 5vw);
        margin: 8vw 2vw 2vw 2vw;
    }
`;

export default function QuizStart() {
    return (
        <div>
            <StyledLink className="minecraft-btn" to={`/SurvivalQuiz`}>Survival</StyledLink>
            {/* <h1 className="minecraft-btn">Creative</h1> */}
            <StyledLink className="minecraft-btn" to={`/CreativeQuiz`}>Creative</StyledLink>
            <StyledLink2 className="minecraft-btn" to={`/`}>Back</StyledLink2>
        </div>
    )
}