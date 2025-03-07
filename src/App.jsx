import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Content from './Pages/Content';
import Owners from './Pages/Owners';
import Subscription from './Pages/Subscription';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="overview" element={<Content />} />
          <Route path="owner" element={<Owners />} />
          <Route path="subscription" element={<Subscription />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
