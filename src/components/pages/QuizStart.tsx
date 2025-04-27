import { Link } from "react-router";

export default function QuizStart() {
    return (
        <div>
            <Link className="minecraft-btn" to={`/SurvivalQuiz`}>Survival</Link>
            {/* <h1 className="minecraft-btn">Creative</h1> */}
            <Link className="minecraft-btn" to={`/CreativeQuiz`}>Creative</Link>
        </div>
    )
}