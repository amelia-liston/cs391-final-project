import './App.css'
// kris worked on routing

import HomePreview from './components/pages/HomePreview';
import SurvivalQuiz from "./components/pages/SurvivalQuiz.tsx";
import CreativeQuiz from "./components/pages/CreativeQuiz.tsx";
import QuizStart from './components/pages/QuizStart.tsx';
import About from './components/pages/About';

import { Route, Routes, createBrowserRouter, RouterProvider } from "react-router";
import { styled } from "styled-components";


const StyledDiv = styled.div`
    // background-image: url("title-background-screen.jpg");
    // background-size: cover;
`;

// Using a Root function to get paths to each page we have in the program.
export function Root() {
  return (
      <>
          <Routes>
              <Route path={`/*`}
                      element={<HomePreview />}
              />
              <Route path={`/QuizStart`}
                      element={<QuizStart />}
              />
               <Route path={`/SurvivalQuiz`}
                      element={<SurvivalQuiz />}
               />
               <Route path={`/CreativeQuiz`}
                      element={<CreativeQuiz />}
               />
               <Route path={`/About`}
                      element={<About />}
               />
          </Routes>
      </>
  );
}

const router = createBrowserRouter(
  [{path:"*", Component:Root}]
);

// Using the Router Provider to handle pages instead of going directly to the HomePage
export default function App() {

  return (
      <StyledDiv>
          <RouterProvider router={router} />
      </StyledDiv>
  )
}