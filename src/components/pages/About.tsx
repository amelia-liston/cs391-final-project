import DisplayAll from "../DisplayAll.tsx";
import DisplayAvatar from "../DisplayAvatar.tsx";
import styled from "styled-components";
import "/src/index.css";
import { Link } from "react-router";

const AllAvatarsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;

`;
const CenterH = styled.h1`
    justify-content: center;
    text-align: center;
    color: var(--text-color); 
    font-family: 'Minecraft', sans-serif;
    font-size: 3rem;
    font-weight: lighter;
`;


const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    margin: 1vw;
    text-align: center;
    width: 22%;
    padding: 0.3vw 3vw 1vw 3vw;
    // font-size: calc(2px + 2vw);
`;

const StyledMain = styled.main`
    background: url('/backgrounds/dirtBackground.jpg');
`;


export default function About() {
    return(
        <>
            <StyledMain>
                {/* <StyledLink className="minecraft-button" to={`/HomePreview`}>Back</StyledLink> */}
                <CenterH>About This Game:</CenterH>
                <h2 className="about">We're just some CS girlies curious about which mob we might be. We made these mob cards for the final results of the quiz. Take our quiz to find out which mob you are!</h2>
                <DisplayAll/>
                <CenterH>About the Creators:</CenterH>
                <AllAvatarsDiv>
                    <DisplayAvatar img="/amelia-avatar.png" name="Amelia" bio="Hey! I'm a CS major at BU, class of 2026. My favorite mob is an oceleot, and in the game I'm a builder."/>
                    <DisplayAvatar img="/mia-avatar.png" name="Mia" bio="Hi Yall! I'm a CS Major part of the class of 2025. My favorite mob is the pig, and my role in Minecraft is Survivor (my king Jeff Probst!)"/>
                    <DisplayAvatar img="/kris-avatar.png" name="Kris" bio="Hey! I'm a CS major at BU, class of 2025. My favorite mob is the wolf or cow, and in the game I'm a miner, while my best friend is the builder."/>
                    <DisplayAvatar img="/sophia-avatar.png" name="Sophia" bio="Hi! I'm a CS major at BU, class of 2025. My favorite mod is an axolotl, and in the game I'm also a miner!"/>
                </AllAvatarsDiv>
            </StyledMain>
        </>
    )
}