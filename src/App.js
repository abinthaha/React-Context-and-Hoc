import React from 'react';
import './App.css';
import LandingComponent from './app/components/LandingComponent';
import AlertComponent from './app/components/AlertComponent';
import ContextWrapper from './app/provider/ContextProvider';

function App() {
  return (
    <ContextWrapper>
        <div className="App">
            <LandingComponent />
            <AlertComponent />
        </div>
    </ContextWrapper>
  );
}

export default App;
