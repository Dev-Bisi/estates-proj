import { useState } from "react";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = input;
    setChat([...chat, { sender: "user", text: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();
      setChat((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (error) {
      setChat((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error connecting to AI server." },
      ]);
    }
    setLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 bg-white border rounded-2xl shadow-lg flex flex-col">
      <div className="bg-blue-600 text-white text-center py-2 rounded-t-2xl font-semibold">
        🤖 AI Chatbot
      </div>

      <div className="flex-1 p-3 overflow-y-auto space-y-2 h-64">
        {chat.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-2xl text-sm max-w-[70%] ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-center text-gray-400 text-xs">AI is typing...</div>
        )}
      </div>

      <div className="p-2 flex items-center space-x-2 border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type message..."
          className="flex-1 border rounded-full px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}