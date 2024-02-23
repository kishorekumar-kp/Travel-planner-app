import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from './pages/HomePage.jsx';
import MakePlanner from './pages/MakePlanner.jsx';
import ViewPlanner from './pages/ViewPlanner.jsx';
// import OldMakePlanner from './pages/copy/copyOldMakeplanner.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path:"/makeplanner",
        element:<MakePlanner/>
      },
      {
        path:"/viewplanner",
        element:<ViewPlanner/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  // <App />,
);
