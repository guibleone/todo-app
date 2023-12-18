// DarkModeToggle.js
'use client'

// DarkModeToggle.tsx
import React, { useState, useEffect } from 'react';
import { CiDark,CiLight  } from "react-icons/ci";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is already set in localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);

    // Apply dark mode class to body
    document.body.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;

    // Update state
    setDarkMode(newMode);

    // Save mode to localStorage
    localStorage.setItem('darkMode', newMode.toString());

    // Apply dark mode class to body
    document.body.classList.toggle('dark', newMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
    >
      {darkMode ? <CiLight size={35} /> : <CiDark size={35} />}
    </button>
  );
};

export default DarkModeToggle;
