import React, { useState, useEffect } from 'react';

// Custom Dictionary for spell check
const customDictionary = {
  teh: 'the',
  wrok: 'work',
  fot: 'for',
  exampl: 'example'
};

const XSpellCheck = () => {
  // State to handle text input and suggestion
  const [inputText, setInputText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  // Function to check for spelling mistakes and give suggestions
  const checkSpelling = (text) => {
    const words = text.split(' ');
    for (let word of words) {
      const lowercaseWord = word.toLowerCase();
      if (customDictionary[lowercaseWord]) {
        setSuggestion(`Did you mean: ${customDictionary[lowercaseWord]}?`);
        return;
      }
    }
    // If no misspelling is found, reset suggestion
    setSuggestion('');
  };

  // useEffect hook to run the spell check when input text changes
  useEffect(() => {
    if (inputText.trim() === '') {
      setSuggestion(''); // No suggestion when input is empty
    } else {
      checkSpelling(inputText);
    }
  }, [inputText]);

  // Handler for input change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="spell-check-container">
      <h2>Real-Time Spell Check</h2>
      <textarea
        rows="5"
        cols="50"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type here..."
      />
      {suggestion && <p className="suggestion">{suggestion}</p>}
    </div>
  );
};

export default XSpellCheck;
