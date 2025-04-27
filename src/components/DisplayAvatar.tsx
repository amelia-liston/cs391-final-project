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

export default function DisplayAvatar({ name, img, bio }: AvatarProps) {
    return(
        <>
            <OneAvatarDiv>
                <StyledImage src={img} alt={`${name}'s Avatar`} />
                <h3 className="about">{name}</h3>
                <h4 className="about">{bio}</h4>
            </OneAvatarDiv>

        </>
    )
}