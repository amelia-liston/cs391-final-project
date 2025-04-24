import './App.css'
import HomePreview from './components/pages/HomePreview';
import QuizDisplay from './components/pages/QuizDisplay';
import { Route, Routes, createBrowserRouter, RouterProvider } from "react-router";

export function Root() {
  return (
      <>
           <Routes>
              <Route path={`/*`}
                     element={<HomePreview />}
              />
              <Route path={`/QuizDisplay`}
                     element={<QuizDisplay />}
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
      <>
          <RouterProvider router={router} />
      </>
  )
}