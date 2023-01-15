import { FC } from 'react';
import { Message } from './Message';
import { SendMessage } from './SendMessage';

export const ChatBox: FC = () => {
  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        <Message />
      </div>
      <SendMessage />
    </main>
  );
};
