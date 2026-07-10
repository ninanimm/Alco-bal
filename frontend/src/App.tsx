import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { BalanceFilterPage } from './pages/BalanceFilterPage';
import { SearchResultsPage } from './pages/SearchResultsPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="w-full min-h-screen bg-background relative overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/balance-filter" element={<BalanceFilterPage />} />
          <Route path="/search-result" element={<SearchResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
