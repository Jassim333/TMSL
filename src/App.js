import Home from "./Home";
import Standings from "./Standings";
import Schedule from "./Schedule";
import Navbar from "./Navbar";

import { BrowserRouter, Route, Routes}  from "react-router-dom";



function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/standings" element={<Standings />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
