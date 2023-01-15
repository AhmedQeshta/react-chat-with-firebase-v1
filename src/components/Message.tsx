import { FC } from 'react';

export const Message: FC = () => {
  return (
    <div className="chat-bubble">
      <img className="chat-bubble__left" src="" alt="user avatar" />
      <div className="chat-bubble__right">
        <p className="user-name">Ahmed Qeshta</p>
        <p className="user-message">
          We are building a real time chat app with React and Firebase.
        </p>
      </div>
    </div>
  );
};
