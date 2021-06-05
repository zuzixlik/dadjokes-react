import React from 'react';
import { render } from 'react-dom';
import { Joke } from './components/joke/Joke';
import { jokes } from './jokes.js';
import './style.css';

const AppContent = () => {
  return (
    <>
      <div>
        {jokes.map((jk) => (
          <Joke
            key={jk.id}
            userAvatar={jk.avatar}
            userName={jk.name}
            text={jk.text}
            likes={jk.likes}
            dislikes={jk.dislikes}
          ></Joke>
        ))}
      </div>
    </>
  );
};

render(<AppContent />, document.getElementById('app'));
