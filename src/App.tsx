import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/shared/Home';
import Results
 from './components/shared/Results';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home/> } />
        <Route path="/results/:urlId" element={ <Results/>} />
      </Routes>
    </Router>
  );
};

export default App;
