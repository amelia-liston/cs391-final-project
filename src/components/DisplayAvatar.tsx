//DisplayAvatar component created by Amelia Liston

import styled from "styled-components";
import "/src/index.css";


type AvatarProps = {
    name: string;
    img: string;
    bio: string;
}

const StyledImage = styled.img`
    max-width: 80%;
    margin: 1vh 1vw;
`;

const OneAvatarDiv=styled.div`
    flex-direction: column;
    justify-content: center;
    max-width: 20%;
    text-align: center;
`;

const StyledH3 = styled.h3`
    font-size: calc(4px + 3vw);
    color: lightgreen;
`;

const StyledH4 = styled.h4`
    font-size: calc(4px + 2vw);
`;

export default function DisplayAvatar({ name, img, bio }: AvatarProps) {
    return(
        <>
            <OneAvatarDiv>
                <StyledImage src={img} alt={`${name}'s Avatar`} />
                <StyledH3 className="about">{name}</StyledH3>
                <StyledH4 className="about">{bio}</StyledH4>
            </OneAvatarDiv>

        </>
    )
}