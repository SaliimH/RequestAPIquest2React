import DisplaySimpsons from './components/DisplaySimpsons.jsx';
import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const sampleCharacter = {
    "quote": "In theory, Communism works! In theory.",
    "character": "Homer Simpson",
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    "characterDirection": "Right"
    };
  
  const [character, setCharacter] = useState(sampleCharacter);
  const getCharacter = () => {
    
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=2')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setCharacter(data[1]);
      });
  };
  


  return (
    <div>
    <DisplaySimpsons character={character} />
    <button type="button" onClick={getCharacter}>Get Character</button>
    </div>
  );
}

export default App;
