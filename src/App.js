import React from 'react'; // Ensure React is imported
import logo from './logo.svg';
import './App.css';
import Home from './ui/home';
import Dashboard from './ui/dashboard';

function App() {
  return (
    <div className="App">
   
      <Home /> {/* Include the Home component */}
    </div>
  );
}

export default App