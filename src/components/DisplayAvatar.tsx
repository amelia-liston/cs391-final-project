import styled from "styled-components";

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
    max-width: 100%;
    text-align: center;
`;

export default function DisplayAvatar({ name, img, bio }: AvatarProps) {
    return(
        <>
            <OneAvatarDiv>
                <StyledImage src={img} alt={`${name}'s Avatar`} />
                <h3>{name}</h3>
                <h4>{bio}</h4>
            </OneAvatarDiv>

        </>
    )
}