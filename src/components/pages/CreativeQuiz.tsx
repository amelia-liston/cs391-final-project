// Mia/Sophia component!

import {useState, useEffect} from 'react';
import {QuizTypes} from "../../../quizTypes.tsx";
// Option
import DisplayQuestion from '../DisplayQuestion.tsx';
import CardMath from '../CardMath.tsx';
import DisplayFinalResult from "../DisplayFinalResult.tsx";
import OptArrayCreate from "../OptArrayCreate.tsx";
// import Nav from "../Nav";

// Sophia: this function takes in the quiz type array and currId and returns the question
// associated with the currId
// allows for functionality to grab specific questions based on nextId (in quizTypes)!
function getQuestion(data:QuizTypes[], currId: string) {
    // returns the question with the answer attached
    return data.find(t => t.id === currId);
}

// main tsx function
export default function CreativeQuiz() {
    // ideas from MBTI for quiz question groups

    // group 1
    const [extraversion, setExtraversion] = useState(0);
    const [introversion, setIntroversion] = useState(1);
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

    // useState to display questions!
    const [data, setData] = useState<QuizTypes[]|null>(null);
    // useState to get/set currId, start at first id which is always id1
    const [currId, setCurrId] = useState("id1");

    // get data and unnest it to put in data array
    useEffect(() => {
        async function fetching() {
            try {
                const res = await fetch("/creativeQuestions.json");
                // this line below unnests the data; because data is in a json, the format
                // is known, so the code is being told the format here
                const newData: { creativeQuestions: QuizTypes[] } = await res.json();
                // now it is possible to unnest the data and just get the quizType array!
                setData(newData.creativeQuestions);
            } catch (err) {
                console.error("Error!: ", err);
            }
        }
        // runs the above function
        fetching();
    }, []);

    // There is no data loaded yet, so show a loading screen
    if (data === null){
        console.log("Still setting data/loading!");
        // show loading component here?
        return (
            <>
            {/* make component for loading screen!*/}
                <h2>Loading...</h2>
            </>
        );
    }
    // data exists!- can do quiz!
    else {
        // uses currId and data (QuizType array) to get the next question, function at top
        const currQuestion = getQuestion(data, currId);

        // if the question exists, build the display
        if (currQuestion) {
            //building an options array 
            // this ensures if there are less than 4 options it will be ok on the next component!
            // const options: Option[] = []
            // this was moved to a function as both creative quiz and survival quiz use these
            const options = OptArrayCreate(currQuestion);

            // go to next question
            // makes the quiz show the next question
            // also increments the question group associated with the selected answer
            const handleSelect = (idx: number) => {
                const opt = options [idx]
                if (!opt) return
                switch (opt.type) {
                    case 'extraversion':
                        setExtraversion((v) => v + 1)
                        break
                    case 'introversion':
                        setIntroversion((v) => v + 1)
                        break
                    case 'thinking':
                        setThinking((v) => v + 1)
                        break
                    case 'feeling':
                        setFeeling((v) => v + 1)
                        break
                    case 'lazy':
                        setLazy((v) => v + 1)
                        break
                    case 'productive':
                        setProductive((v) => v + 1)
                        break
                    case 'basic':
                        setBasic((v) => v + 1)
                        break
                    case 'chaotic':
                        setChaotic((v) => v + 1)
                        break
                    default:
                        //not type so nothing incrememented :)
                        break
                }
                // set nextId for next question!
                setCurrId(opt.nextId)
            }

            return (
                // display component -mia
                // pass in the questions and answers as props into the function -mia
                // handle select of what the player chooses
                <>
                    {/* <Nav /> */}
                    <DisplayQuestion

                        question={currQuestion.question}
                        //option array passed in
                        options={options.map(o => o.text)}
                        onSelect={handleSelect}
                    />
                </>
            );
        }
        // quiz is finished, load their character that they've earned!
        else if (currId === "FINISHED") {
            // will return a string in the form "IPCT"
            let Card = CardMath(introversion,extraversion,lazy,productive,basic,chaotic, thinking, feeling);

            // display final result component: Sophia
            // This takes in the Card (string) as an object prop
            return (

                <DisplayFinalResult card={Card}/>
            );
        }

        // At this point there is question;
        // There was some bug in the process: error checking
        // this line should never run if json is formatted well
        else {
            return <h2>"Current question not found!"</h2>;
        }
    }


}