import { styled } from "styled-components";
import { Link } from "react-router";

export const StyledPlayButton = styled(Link)`
    font-family: 'Minecraft', sans-serif;
    font-size: 4rem;
    text-decoration: none;
    text-align: center;
    text-shadow: var(--dark-green) 0 .1em 0; 
    color: var(--text-color); 
    background-color: var(--primary-green);
    position: relative;
    
    width: 7em;
    padding-bottom: .3em;
    border-radius: .1rem;
`;