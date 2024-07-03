import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./views/auth/auth";
import Index from "./views/index/index";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/index/:token" element={<Index/>}/>
      </Routes>
    </Router>
  );
}

export default App;
