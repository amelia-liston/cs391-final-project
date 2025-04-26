import { Link } from "react-router";

export default function QuizStart() {
    return (
        <div>
            <h1 className="minecraft-btn">Survival</h1>
            {/* <h1 className="minecraft-btn">Creative</h1> */}
            <Link className="minecraft-btn" to={`/CreativeQuiz`}>Creative</Link>
        </div>
    )
}