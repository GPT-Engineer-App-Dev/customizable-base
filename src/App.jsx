import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Gallery from "./pages/Gallery.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
