import React, { useState, useRef, useEffect } from "react"; // Importando useState, useRef e useEffect
import { ChatInput } from "./components/ChatInput";
import { ChatMessage } from "./components/ChatMessage";
import { TypingIndicator } from "./components/TypingIndicator";

function App() {
  const [messages, setMessages] = useState([]); // Inicializando como array vazio
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null); // Ref para rolar até a última mensagem

  const handleSendMessage = async (text) => {
    const userMessage = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date().toLocaleTimeString(),
    };

    // Adiciona a mensagem do usuário
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simula uma resposta do bot após 1.5s
    setTimeout(() => {
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: "I'm a simulated response. The actual AI integration will be added later.",
        isBot: true,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  // Função para rolar até o final da tela sempre que a lista de mensagens mudar
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <main className="flex flex-col">
      <div className="flex-1 overflow-y-scroll px-4 py-4 pb-20" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="space-y-4 m-8">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isBot={message.isBot}
              timestamp={message.timestamp}
            />
          ))}
          {isTyping && <TypingIndicator />}{" "}
          {/* Exibe o TypingIndicator quando o bot está digitando */}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div
        className="fixed bottom-0 inset-x-0 bg-white bg-opacity-50 backdrop-blur-md pb-8 me-4"
        style={{ zIndex: 1 }}
      >
        <div className="mx-10 pb-4">
          <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
        </div>
      </div>
    </main>
  );
}

export default App;
