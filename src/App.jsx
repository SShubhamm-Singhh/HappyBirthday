import SecondPage from "./component/SecondPage";
import LandingPage from "./component/LandingPage";
import ThirdPage from "./component/ThirdPage";
import FourthPage from "./component/FourthPage";
import LastPage from "./component/LastPage";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/third" element={<ThirdPage />} />
          <Route path="/fourth" element={<FourthPage />} /> 
          <Route path="/last" element={<LastPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
