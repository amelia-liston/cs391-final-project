import styled from 'styled-components';
const StyledImage = styled.img`
    max-width: 30%;
    margin: 1vh 1vw;
`;

export default function DisplayAll() {
    return(
        <>
            <div>
                <StyledImage src={"/Axolotl.png"} alt="Axolotl Card"/>
                <StyledImage src={"/Baby Zombie.png"} alt="Baby Zombie Card"/>
                <StyledImage src={"/Bee.png"} alt="Bee Card"/>
                <StyledImage src={"/Bee.png"} alt="Bee Card"/>
            </div>
        </>
    );
}