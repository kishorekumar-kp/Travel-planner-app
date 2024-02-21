import { Outlet } from "react-router-dom";
import TheNavbar from "./components/TheNavbar";
// import { HomePage } from "./pages/HomePage";


function App() {

  return (
  <div className="">
    <TheNavbar/>
    <Outlet/>
  </div>
  )
}

export default App;
