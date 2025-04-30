import styled from "styled-components";
import Nav from "../Nav";

const StyledDiv = styled.div`
    justify-content: center;
    text-align: center;
`;
const StyledImg = styled.img`
    max-width: 50%;
    border: black 5px solid;
`;

const StyledH1 = styled.h1`
    width: 100%;
    font-size: calc(3px + 3vw);
`;

export default function QRCode() {
    return (
        <StyledDiv>
            <Nav />
            <StyledH1 className="minecraft-button-small">Scan to play along!</StyledH1>
            <StyledImg src="QRcode.png" alt="QR Code for minecraft on phone."></StyledImg>
        </StyledDiv>

    );
}