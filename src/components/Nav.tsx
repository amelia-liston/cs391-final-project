//Nav component created by Amelia Liston
//this is not intended to be displayed on every page, which is why it is not displayed in App.tsx
//this is displayed on About page, CreativeQuiz page, SurvivalQuiz page, and LoadingResults

import styled from 'styled-components';
import {Link} from "react-router";

const StyledNav=styled.nav`
    justify-content: space-between;
    width: 100%;
`;

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    margin: 1vw;
    text-align: center;
    width: 25%;
    padding: 0.3vw 3vw 1vw 3vw;
`;

const StyledList=styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: center;
    
    @media screen and (max-width: 750px){
        display: flex;
        justify-content: space-between;
        list-style: none;
        padding-left: 0;
    }
`;


export default function Nav(){
    return(
        <>
            <StyledNav>
                <StyledList>
                    <li><StyledLink className="minecraft-button-small" to={"/"}>Home</StyledLink></li>
                    <li><StyledLink className="minecraft-button-small" to={"/About"}>About</StyledLink></li>
                </StyledList>
            </StyledNav>
        </>
    )
}