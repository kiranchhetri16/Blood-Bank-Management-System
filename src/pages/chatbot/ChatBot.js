import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: uuidv4(), sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { id: uuidv4(), sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    setLoading(true);

    try {
      const botResponse = await getAIResponse(input);
      setMessages((prev) => [
        ...prev,
        { id: uuidv4(), sender: "bot", text: botResponse },
      ]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      setMessages((prev) => [
        ...prev,
        { id: uuidv4(), sender: "bot", text: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getAIResponse = async (userInput) => {
    // const API_KEY =
    //   ""; // Your OpenAI API key
    // const API_URL = "https://api.openai.com/v1/chat/completions";

    try {
      const response = await axios.post(
        API_URL,
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userInput }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      return response.data.choices[0].message.content.trim();
    } catch (error) {
      console.error("Error while fetching AI response:", error);
      throw new Error("AI response error");
    }
  };

  return (
    <div style={styles.chatbot}>
      <div style={styles.chatWindow}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              ...styles.message,
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.sender === "user" ? "#DCF8C6" : "#FFF",
            }}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div style={styles.loading}>Typing...</div>}
      </div>
      <div style={styles.inputBox}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  chatbot: {
    display: "flex",
    flexDirection: "column",
    height: "500px",
    width: "300px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif",
  },
  chatWindow: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  message: {
    padding: "10px",
    borderRadius: "8px",
    maxWidth: "70%",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
  },
  loading: {
    fontStyle: "italic",
    color: "#aaa",
  },
  inputBox: {
    display: "flex",
    borderTop: "1px solid #ccc",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "none",
    outline: "none",
  },
  sendButton: {
    padding: "10px 20px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#FFF",
    cursor: "pointer",
  },
};

export default Chatbot;
