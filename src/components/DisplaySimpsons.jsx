import React from 'react';

function DisplaySimpsons({ character }) {
  return (
    character && (
      <div className='DisplaySimpsons'>
        <img src={character.image} alt=""/>
        <ul>
          <li>
            Name: {character.character}
          </li>
          <li>quote: {character.quote}</li>
          <li>
          characterDirection: {character.characterDirection}
          </li>
        </ul>
      </div>
    )
  );
}

export default DisplaySimpsons;