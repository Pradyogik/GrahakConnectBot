import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Language from './pages/Language';
import ChatWindow from './pages/ChatWindow';


function App() {
  const [showHome, setShowHome] = useState(false);

  const handleClose = () => {
    setShowHome(false);
  };

  return (
    <Router>
      {!showHome && (
        <button 
          className="fixed bottom-0 right-0 m-4 p-2 bg-blue-500 text-white rounded"
          onClick={() => setShowHome(true)}
        >
          Toggle Home
        </button>
      )}
      {showHome && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/language" element={<Language />} />
          <Route path="/chats" element={<ChatWindow />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;