import {useState, useEffect} from 'react';
// import creativeQuestions from "../creativeQuestions.json"
import {CreativeTypes} from "../../../creativeTypes.tsx";

function getQuestion(data:CreativeTypes[], currId: string) {
    return data.find(t => t.id === currId);
}

export default function CreativeQuiz() {
    // ideas from MBTI
    // group 1
    // const [extraversion, setExtraversion] = useState(0);
    // const [introversion, setintroversion] = useState(0);
    // // group 2
    // const [thinking, setThinking] = useState(0);
    // const [feeling, setFeeling] = useState(0);
    // // extra
    // //group 3
    // const [lazy, setLazy] = useState(0);
    // const [productive, setProductive] = useState(0);
    // // group 4
    // const [basic, setBasic] = useState(0);
    // const [chaotic, setChaotic] = useState(0);

    // useState to display questions!
    const [data, setData] = useState<CreativeTypes[]|null>(null);
    const [currId, setCurrId] = useState("id1");

    // get data and unnest it to put in data array
    useEffect(() => {
        async function fetching() {
            try {
                const res = await fetch("/creativeQuestions.json");
                const newData: { creativeQuestions: CreativeTypes[] } = await res.json();
                setData(newData.creativeQuestions);
            } catch (err) {
                console.error("Error!: ", err);
            }
        }
        fetching();
    }, []);

    // We have no data yet
    if (data === null){
        console.log("Still setting data/loading!");
        // show loading component here?
        return (
            <>
                <h2>Loading...</h2>
            </>
        );
    }
    // data exists!
    else {
        console.log("Data here!", data);
        // fully loaded data
        // console.log("Question: ", getQuestion(data));
        const currQuestion = getQuestion(data, currId);
        if (currQuestion !== null){
            console.log("Current question: ", currQuestion);
        }
        return (
            <>
                <h2>There is data!</h2>
            </>
        );
    }


}