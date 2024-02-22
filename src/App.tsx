import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/shared/Home';
import Results
 from './components/shared/Results';
import NotFound from './components/shared/NotFound';
import Nav from './components/shared/Nav';
const App: React.FC = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/"  element={<Home/> } />
        <Route path="/results/:urlId" element={ <Results/>} />
        <Route path='/*' element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;
