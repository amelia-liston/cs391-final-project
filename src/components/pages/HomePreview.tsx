import { Link } from "react-router";

export default function HomePreview() {

    return (
      <div>
        <h1>Welcome to the Minecraft personality quiz!</h1>
        <h3>Press START to begin the quiz!</h3>
        <Link to={`/SurvivalQuiz`}>Survival mode</Link>
        <Link to={`/CreativeQuiz`}>Creative mode</Link>
      </div>
    )
  }