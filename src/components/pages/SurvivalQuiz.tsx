import {useState} from 'react';

export default function SurvivalQuiz() {
    // ideas from MBTI
    // group 1
    const [extraversion, setExtraversion] = useState(0);
    const [introversion, setintroversion] = useState(0);
    // group 2
    const [thinking, setThinking] = useState(0);
    const [feeling, setFeeling] = useState(0);
    // extra
    //group 3
    const [lazy, setLazy] = useState(0);
    const [productive, setProductive] = useState(0);
    // group 4
    const [basic, setBasic] = useState(0);
    const [chaotic, setChaotic] = useState(0);

    return (
        <div>
            <h4>Question 1...</h4>
        </div>
    );
}