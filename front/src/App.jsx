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
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]);

  return (
    <main
      className="flex flex-col"
      style={{
        backgroundColor: "rgb(17, 18, 23)",
        minHeight: "100vh",
      }}
    >
      <div
        className="flex-1 px-4 py-4  overflow-auto" // Usa overflow-auto para permitir rolagem apenas quando necessário
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          backgroundColor: "rgb(17, 18, 23)",
          overflowY: "auto", // Mantém a rolagem no chat sem afetar a página principal
          maxHeight: "calc(100vh - 50px)", // Define um limite para o scroll do chat
        }}
      >
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
          <div ref={messagesEndRef} style={{ height: "10px" }} />
        </div>
      </div>
      <div
        className="fixed bottom-0 inset-x-0  bg-opacity-50 backdrop-blur-md pb-2"
        style={{ zIndex: 1,  }}
      >
        <div className="mx-10 pb-2">
          <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
        </div>
      </div>
    </main>
  );
}

export default App;
