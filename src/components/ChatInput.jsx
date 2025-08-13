import { useState } from "react";
import LoadingIcon from "../assets/loading-spinner.gif";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(e) {
    setInputText(e.target.value);
  }

  function saveKeyDownText(e) {
    if (e.key === "Enter") {
      sendMessage();
    } else if (e.key === "Escape") {
      setInputText("");
    }
  }

  async function sendMessage() {
    if (isLoading || inputText === "") {
      return;
    }

    setIsLoading(true);

    setInputText("");

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages([
      ...newChatMessages,
      {
        message: <img className="loading-spinner" src={LoadingIcon} />,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setIsLoading(false);
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbox"
        size="30"
        onChange={saveInputText}
        onKeyDown={saveKeyDownText}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}
