import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'

export function ChatMessage({ message, sender }) {
  return (
    <div className={sender === "user" ? "chat-user" : "chat-robot"}>
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-pic" />
      )}
      <div className="chat-text">{message}</div>
      {sender === "user" && (
        <img src={UserProfileImage}
        className="chat-pic" />
      )}
    </div>
  );
}