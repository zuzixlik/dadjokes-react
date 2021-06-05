import React, { useState } from 'react';
import './style.css';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [likeUP, setlikeUP] = useState(likes);
  const [likeDwn, setlikeDwn] = useState(dislikes);

  return (
    <>
      <div className="container">
        <div className="joke">
          <div className="joke__body">
            <div className="joke__user">
              <img className="user-avatar" src={userAvatar} />
              <p className="user-name">{userName}</p>
            </div>

            <p className="joke__text">{text}</p>
          </div>

          <div className="joke__likes">
            <button
              id="btn-up"
              className="btn-like btn-like--up"
              onClick={() => setlikeUP(likeUP + 1)}
            ></button>
            <span id="likes-up" className="likes-count likes-count--up">
              {likeUP}
            </span>
            <button
              id="btn-down"
              className="btn-like btn-like--down"
              onClick={() => setlikeDwn(likeDwn - 1)}
            ></button>
            <span id="likes-down" className="likes-count likes-count--down">
              {likeDwn}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
