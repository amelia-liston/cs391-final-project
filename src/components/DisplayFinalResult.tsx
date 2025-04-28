import {Link} from "react-router";
import styled from "styled-components";

interface DisplayProps {
    card: string
}

export const DirtWrapper = styled.div`
  background: url('/backgrounds/dirtBackground.jpg') top center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 60%;
  height: 40%;
  margin: auto;
  padding: 2% 1%;
`;

const StyledDiv = styled.div`
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const StyledImage = styled.img`
    max-width: 50%;
    margin: auto;
`;

const StyledLink = styled(Link)`
    margin: 2% auto auto;
    text-align: center;
`;

const CenterH = styled.h1`
    text-align: center;
    color: var(--text-color); 
    font-family: 'Minecraft', sans-serif;
    font-size: 3rem;
    font-weight: lighter;
`;

function cardSelect(card: string) {
    // ILBT
    // ILBF
    // ILCT
    // ILCF
    // IPBT
    // IPCT
    // IPBF
    // IPCF
    // ELBT
    // ELBF
    // ELCT
    // ELCF
    // EPBT
    // EPCT
    // EPBF
    // EPCF
    let img = '';
    let alt = ''
    // Turtle
    if (card === "ILBT") {
        img = '/Turtle.png'
        alt = 'Turtle card'
    }
    // Axolotl
    else if (card === "ILBF") {
        img = '/Axolotl.png'
        alt = 'Axolotl card'
    }
    // Panda
    else if (card === "ILCT") {
        img = '/Panda.png'
        alt = 'Panda card'
    }
    // Parrot
    else if (card === "ILCF") {
        img = '/Parrot.png'
        alt = 'Parrot card'
    }
    // Turtle
    else if (card === "IPBT") {
        img = '/Turtle.png'
        alt = 'Turtle card'
    }
    // Fox
    else if (card === "IPCT") {
        img = '/Fox.png'
        alt = 'Fox card'
    }
    // Wolf
    else if (card === "IPBF") {
        img = '/Wolf.png'
        alt = 'Wolf card'
    }
    // Bee
    else if (card === "IPCF") {
        img = '/Bee.png'
        alt = 'Bee card'
    }
    // Cat
    else if (card === "ELBT") {
        img = '/Cat.png'
        alt = 'Cat card'
    }
    // Cat
    else if (card === "ELBF") {
        img = '/Cat.png'
        alt = 'Cat card'
    }
    // Axolotl
    else if (card === "ELCT") {
        img = '/Axolotl.png'
        alt = 'Axolotl card'
    }
    // Bee
    else if (card === "ELCF") {
        img = '/Bee.png'
        alt = 'Bee card'
    }
    // Wolf
    else if (card === "EPBT") {
        img = '/Wolf.png'
        alt = 'Wolf card'
    }
    // Steve
    else if (card === "EPCT") {
        img = '/STEVE.png'
        alt = 'Steve card'
    }
    // Wolf
    else if (card === "EPBF") {
        img = '/Wolf.png'
        alt = 'Wolf card'
    }
    // Bee
    else if (card === "EPCF") {
        img = '/Bee.png'
        alt = 'Bee card'
    }
    else {
        img = "problem";
        alt = 'Problem'
    }

    return {img, alt}
    // return img
}

export default function DisplayFinalResult({card}:DisplayProps) {
    let finalCard = cardSelect(card);

    if (finalCard.img === "problem") {
        return (
            <>
                <h2>Error displaying</h2>
            </>
        );
    }
    // https://stackoverflow.com/questions/50694881/how-to-download-file-in-react-js
    // can use <Link to="/files/myfile.pdf" target="_blank" download>Download</Link> to download files
    // where Where /files/myfile.pdf is inside your public folder.
    else {
        return (
            <>
                <StyledDiv>
                    <DirtWrapper>
                        <StyledDiv>
                            <CenterH>Final result:</CenterH>
                            <CenterH>Type: {card}</CenterH>
                            <StyledImage src={finalCard.img} alt={finalCard.alt}/>
                        </StyledDiv>
                    </DirtWrapper>
                    <StyledLink className="minecraft-button" to={finalCard.img} target="_blank" download>Download</StyledLink>
                </StyledDiv>
            </>
        );
    }
}