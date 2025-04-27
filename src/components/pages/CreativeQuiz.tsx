import {useState, useEffect} from 'react';
// import creativeQuestions from "../creativeQuestions.json"
import {CreativeTypes} from "../../../creativeTypes.tsx";
import DisplayQuestion from '../DisplayQuestion.tsx';
import {Option} from "../../../creativeTypes.tsx";

function getQuestion(data:CreativeTypes[], currId: string) {
    // returns the question with the answer attached
    return data.find(t => t.id === currId);
}


export default function CreativeQuiz() {
    // ideas from MBTI
    // group 1
    const [extraversion, setExtraversion] = useState(0);
    const [introversion, setIntroversion] = useState(0);
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
            {/* make component for loading screen!*/}
                <h2>Loading...</h2>
            </>
        );
    }
    // data exists!
    //maybe get rid of else? -mia
    else {
        console.log("Data here!", data);
        // fully loaded data
        // console.log("Question: ", getQuestion(data));
        const currQuestion = getQuestion(data, currId);
        if (!currQuestion){
            return <h2>"Current question not found!"</h2>;
        }
            //mia suggestion, no idea if itll work HEHE
            //building an options array 
            //ensure if there are less than 4 options it will be ok on the next component!
            //
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
              //i feel like here will handle the incrementing of the personalities!
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
            //handle select of what the player chooses 
            <>
                {/* <h2>There is data!</h2> */}
                <DisplayQuestion
                    
                    question={currQuestion.question}
                    //option array passed in 
                    options = {options.map(o => o.text)}
                    onSelect={handleSelect}
                />
            </>
        );
    }


}