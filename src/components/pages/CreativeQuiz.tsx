import {useState, useEffect} from 'react';
// import creativeQuestions from "../creativeQuestions.json"
import {QuizTypes} from "../../../quizTypes.tsx";
import DisplayQuestion from '../DisplayQuestion.tsx';
import {Option} from "../../../quizTypes.tsx";

function getQuestion(data:QuizTypes[], currId: string) {
    // returns the question with the answer attached
    return data.find(t => t.id === currId);
}


export default function CreativeQuiz() {
    // ideas from MBTI
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
    const [currId, setCurrId] = useState("id1");

    // get data and unnest it to put in data array
    useEffect(() => {
        async function fetching() {
            try {
                const res = await fetch("/creativeQuestions.json");
                const newData: { creativeQuestions: QuizTypes[] } = await res.json();
                setData(newData.creativeQuestions);
            } catch (err) {
                console.error("Error!: ", err);
            }
        }
        fetching();
    }, []);

    // There is no data loaded yet
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
        console.log("Data here!", data);

        const currQuestion = getQuestion(data, currId);
        // error checking here!

        // if the question exists, build the display
        if (currQuestion) {
            //building an options array 
            // this ensures if there are less than 4 options it will be ok on the next component!
            const options: Option[] = []
            if (currQuestion.a1 && currQuestion.a1nextId) {
                options.push({
                    text: currQuestion.a1,
                    nextId: currQuestion.a1nextId,
                    type: currQuestion.a1Type,
                })
            }
            if (currQuestion.a2 && currQuestion.a2nextId) {
                options.push({
                    text: currQuestion.a2,
                    nextId: currQuestion.a2nextId,
                    type: currQuestion.a2Type,
                })
            }
            if (currQuestion.a3 && currQuestion.a3nextId) {
                options.push({
                    text: currQuestion.a3,
                    nextId: currQuestion.a3nextId,
                    type: currQuestion.a3Type,
                })
            }
            if (currQuestion.a4 && currQuestion.a4nextId) {
                options.push({
                    text: currQuestion.a4,
                    nextId: currQuestion.a4nextId,
                    type: currQuestion.a4Type,
                })
            }

            //go to next question
            //makes the quiz show the next question
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
                setCurrId(opt.nextId)
            }

            return (
                // display component -mia
                // pass in the questions and answers as props into the function -mia
                // handle select of what the player chooses
                <>
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
            return (
                <h2>Finished quiz</h2>
            );
        }
        // No question here; error checking
        else {
            return <h2>"Current question not found!"</h2>;
        }
    }


}