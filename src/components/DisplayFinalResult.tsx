// Sophia's component!

import {Link} from "react-router";
import styled from "styled-components";

// props for taking in the card string from the creativeQuiz/survivalQuiz.tsx
interface DisplayProps {
    card: string
}

// Creating a background wrapper so that the text is more seperated from actual background
export const DirtWrapper = styled.div`
  background: url('/backgrounds/dirtBackground.jpg');
  //background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 60%;
  height: 40%;
  margin: auto;
  padding: 2% 1%;
`;

// styled div to center items and have them in a column!
const StyledDiv = styled.div`
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

// make sure image is not too big/is centered
const StyledImage = styled.img`
    max-width: 50%;
    margin: auto;
`;

// give button some extra margin space
const StyledLink = styled(Link)`
    // margin: 2% auto auto;
    margin: 1vw 0 2vw 0;
    text-align: center;
`;

// have text be minecraft text style!
const CenterH = styled.h1`
    text-align: center;
    color: var(--text-color); 
    font-family: 'Minecraft', sans-serif;
    font-size: 3rem;
    font-weight: lighter;
    margin: 1vw;
`;

// This function takes the card combo string, finds the correct card image from src,
// and outputs an object comprising an image and its corresponding alt string
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

    // return object with img and alt!
    return {img, alt}
}

export default function DisplayFinalResult({card}:DisplayProps) {
    // call above function to get correct image and alt as an object
    let finalCard = cardSelect(card);

    // if the image is problem, there was an error in processing
    // this should never happen, but error checking is important!
    if (finalCard.img === "problem") {
        return (
            <>
                <h2>Error displaying</h2>
            </>
        );
    }
    // Return a component with the card string and the actual card!
    // added functionality to allow download of the card image; took inspiration from
    // https://stackoverflow.com/questions/50694881/how-to-download-file-in-react-js

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
                    {/*<StyledLink className="minecraft-button" to={'/QuizStart'}>Take it again?</StyledLink>*/}
                </StyledDiv>
            </>
        );
    }
}