import React, { useContext } from 'react';
import { AiFillGithub } from 'react-icons/ai';

import Navbar from './components/ui/Navbar';
import Investment from './components/groups/Investment';
import IncomeAndExpenses from './components/groups/IncomeAndExpense';
import Evaluation from './components/groups/Evaluation';
import { DataProvider } from './context/DataContext';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import './App.scss';

const App = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`wrapper overflow-auto ${isDarkMode ? 'dark' : ''}`}>
      <Navbar />
      <div className="content container my-3">
        <div className="row">
          <div className="col-12 col-md-4">
            <Investment />
          </div>
          <div className="col-12 col-md-4">
            <IncomeAndExpenses />
          </div>
          <div className="col-12 col-md-4">
            <Evaluation />
          </div>
        </div>
      </div>
      <div className="text-right p-2">
        <span className="text-muted">
          <a href="https://github.com/kmccullen97/reval" className="mr-2 text-muted">
            <AiFillGithub />
          </a>
          <span>v{process.env.REACT_APP_VERSION}</span>
        </span>
      </div>
    </div>
  );
};

const ProviderApp = () => (
  <ThemeProvider>
    <DataProvider>
      <App />
    </DataProvider>
  </ThemeProvider>
);

export default ProviderApp;
