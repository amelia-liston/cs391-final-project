import styled from "styled-components";

type AvatarProps = {
    name: string;
    img: string;
    bio: string;
}

const StyledImage = styled.img`
    max-width: 10%;
    margin: 1vh 1vw;
`;

export default function DisplayAvatar({ name, img, bio }: AvatarProps) {
    return(
        <>
            <StyledImage src={img} alt={`${name}'s Avatar`} />
            <h3>{name}</h3>
            <h4>{bio}</h4>
        </>
    )
}