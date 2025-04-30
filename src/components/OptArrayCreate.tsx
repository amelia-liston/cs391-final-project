// mias component
import {QuizTypes, Option} from "../../quizTypes.tsx";

// creates an instance of options that stores the options the player can choose from 
// returns the info associated with the option the player selects 
export default function OptArrayCreate(currQuestion:QuizTypes) {
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
    return options;
}