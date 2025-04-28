import styled from 'styled-components';

const StyledImage = styled.img`
    max-width: 19%;
    margin: 1vh 2vw;
`;
// maybe create the viewing as a scrowling module instead of all of them on one screen at once
export default function DisplayAll() {
    return(
        <>
            <div>
                <StyledImage src={"/Axolotl.png"} alt="Axolotl Card"/>
                <StyledImage src={"/Baby Zombie.png"} alt="Baby Zombie Card"/>
                <StyledImage src={"/Bee.png"} alt="Bee Card"/>
                <StyledImage src={"/Cat.png"} alt="Cat Card"/>
                <StyledImage src={"/Dolphin.png"} alt="Dolphin Card"/>
                <StyledImage src={"/Fox.png"} alt="Fox Card"/>
                <StyledImage src={"/Panda.png"} alt="Panda Card"/>
                <StyledImage src={"/Parrot.png"} alt="Parrot Card"/>
                <StyledImage src={"/Turtle.png"} alt="Turtle Card"/>
                <StyledImage src={"/Wolf.png"} alt="Wolf Card"/>
                <StyledImage src={"/STEVE.png"} alt="Steve Card"/>
            </div>
        </>
    );
}