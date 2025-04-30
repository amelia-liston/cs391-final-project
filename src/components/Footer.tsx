//Footer component created by Amelia Liston

import styled from 'styled-components';
import { Link } from 'react-router';

const StyledFooter=styled.footer`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(5px + 1vw);
    padding: 1vh 1vw;
    color: white;
    font-family: 'Minecraft', sans-serif;
    background: url('/backgrounds/dirtBackground.jpg');
    margin-bottom: 1rem;
`;

//the default dark blue is not legible, so this changes the linked words to a lighter blue
const StyledLink = styled(Link)`
    color: lightblue;
`;

export default function Footer(){
    return(
        <>
            <StyledFooter>
                <p>All rights reserved by Amelia liston, Mia Batista, Sophia Howson, and Kris Peters <StyledLink to={`/credits`}>Credits</StyledLink> &#169; </p>
                <p>Check out our <StyledLink to={`https://github.com/amelia-liston/cs391-final-project`}>Github repo</StyledLink></p>
            </StyledFooter>
        </>
    );
}