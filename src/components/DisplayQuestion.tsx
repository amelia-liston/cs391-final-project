// // Mia's Component 
// //display similar to when you re loading up your world menu

// // import React from 'react';

import styled from 'styled-components'
import "/src/index.css";

// dirt box div
export const QuizWrapper = styled.div`

  width: 60%;
  height: 90%;
  margin: auto;
  padding: 5% 2%;
  background: url('/backgrounds/dirtBackground.jpg') top center;
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
`;
//the metal box inside dirt div
const Panel = styled.div`
    background: #3d3d3d;
    border: 4px solid #1f1f1f;
    padding: 3rem;


    width: 80%;
    height: 40%;

    
    box-shadow: inset -2px -2px #2a2a2a,
                inset 2px  2px #4a4a4a;
`;

const QuestionBox = styled.div`
  background: #2a2a2a;
  border: 2px solid #7f7f7f;
  color: #eee;
  font-family: 'Minecraftia', sans-serif;

  padding: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;

  font-size: clamp(0.3rem, 1.5vw, 1.3rem);

  
`;

const OptionsGrid = styled.div`
  display: grid;
  width: 100%;
    
  grid-template-columns: repeat(1, max-content);
  gap: 0.75rem;
  justify-content: center;

  display: inline-block;
`;

const OptionBtn = styled.button`


    font-family: 'Minecraftia', sans-serif;
    // dynamic font size!
    font-size: clamp(0.3rem, 1.5vw, 1.5rem);
    text-decoration: none;
  	border-color: #AAA #565656 #565656 #AAA;
  	text-shadow: 3px 3px #4C4C4C;
  	outline: 1.5px solid #000;
    
    
    cursor: pointer;
    

    background: #999 url('https://i.ibb.co/rb2TWXL/bgbtn.png') center / cover;
    image-rendering: pixelated;
    border: 2px solid #000;


    width: 100%;
    height: 100%;
    padding: 0.8rem 1.5rem;
    color: #DDD ;
    text-shadow: 2px 2px #000A;
    box-shadow: inset -2px -4px #0006, inset 2px 2px #FFF7;

    &:hover {
        background-image: none;                    
        background-color: #8088BB; 
        text-shadow: 2px 2px #202013CC;
        color: #FFFFA0;
    }
    &:active {
      box-shadow: inset -2px -4px #0004, inset 2px 2px #FFF5;
    }
`;

//props
interface Props {
  question: string
  options: string[]
  onSelect: (i: number) => void
}

// 7) The presentational component
export default function DisplayQuestion({
  question,
  options,
  onSelect,
}: Props) {
  return (
    <QuizWrapper>
      <Panel>
        <QuestionBox>{question}</QuestionBox>
        {/*  */}
        <OptionsGrid>
          {options.map((opt, i) => (
            <OptionBtn key={i} onClick={() => onSelect(i)}>
              {opt}
            </OptionBtn>
          ))}
        </OptionsGrid>
      </Panel>
    </QuizWrapper>
  )
}
