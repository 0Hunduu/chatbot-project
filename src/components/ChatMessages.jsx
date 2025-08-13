import { UseAutoScroll } from './useAutoScroll'
import {ChatMessage} from './ChatMessage'
import './ChatMessages.css'

function ChatMessages({ chatMessages }) {
  const chatMessageRef = UseAutoScroll([chatMessages]);

  return (
    <div className="chat-msg-container" ref={chatMessageRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages