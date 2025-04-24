// import './App.css'
import HomePreview from './components/pages/HomePreview';
import SurvivalQuiz from "./components/pages/SurvivalQuiz.tsx";
import CreativeQuiz from "./components/pages/CreativeQuiz.tsx";
import About from './components/pages/About';
import { Route, Routes, createBrowserRouter, RouterProvider } from "react-router";
import { styled } from "styled-components";


const StyledDiv = styled.div`
    // background-image: url("title-background-screen.jpg");
    // background-size: cover;
`;


export function Root() {
  return (
      <>
           <Routes>
              <Route path={`/*`}
                     element={<HomePreview />}
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

export default function App() {
  return (
      <StyledDiv>
          <RouterProvider router={router} />
      </StyledDiv>
  )
}