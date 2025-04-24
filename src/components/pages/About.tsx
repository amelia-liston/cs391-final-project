import DisplayAll from "../DisplayAll.tsx";
import styled from "styled-components";

const StyledImage = styled.img`
    max-width: 30%;
    margin: 1vh 1vw;
`;

export default function About() {
    return(
        <>
            <main>
                <h1>About This Game</h1>
                <h2>We're just some CS girlies curious about which mob we might be. We made these mob cards for the final results of the quiz. Take our quiz to find out which mob you are!</h2>
                <DisplayAll/>
                <StyledImage src={"/amelia-avatar.png"} alt="Amelia's Avatar"/>
                <StyledImage src={"/mia-avatar.png"} alt="Mia's Avatar"/>
                <StyledImage src={"/kris-avatar.png"} alt="Kris's Avatar"/>
                <StyledImage src={"/sophia-avatar.png"} alt="Sophia's Avatar"/>
            </main>
        </>
    )
}