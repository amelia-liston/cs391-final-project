import {useState, useEffect} from 'react';
// import creativeQuestions from "../creativeQuestions.json"


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
    const [data, setData] = useState(null);
    const [currId, setCurrId] = useState("id1");

    useEffect(() => {
        const fetching = async () => {
            fetch('creativeQuestions.json')
                .then(async (response) => {
                    setData(await response.json());
                })
                .catch((error) => {
                    console.error(`error: ${error}`);
                })
        }
        // const result = getData();
        // setData(await result);
        fetching();
    }, []);

    if (data === null){
        console.log("Still setting data/loading!");
        // show loading component here?
        return (<>
                    <h2>Loading...</h2>
                </>);
    }
    else {
        console.log("Data here!", data);
        // fully loaded data
        return (<>
                    <h2>There is data!</h2>
                </>);
    }


}