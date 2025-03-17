import React, { useState, useRef, useEffect } from "react";
import { IoSend } from "react-icons/io5";

export const ChatInput = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-1 pt-5 border-t border-gray-200"
    >
      <textarea
        ref={textareaRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        disabled={disabled}
        rows={1}
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-custom-yellow focus:ring-1 focus:ring-custom-yellow disabled:opacity-50 resize-none"
        style={{
          minHeight: "40px",
          maxHeight: "200px",
          paddingInline: "20px",
          overflowY: "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      />
      {/* Estilo para esconder a barra de rolagem no Chrome, Safari e Opera */}
      <style>
        {`
        textarea::-webkit-scrollbar {
          display: none;
        }
      `}
      </style>
      <button
        type="submit"
        disabled={!message.trim() || disabled}
        className="p-2 rounded-lg bg-custom-yellow custom-black hover:bg-custom-yellow-hover focus:outline-none focus:ring-2 focus:ring-custom-yellow focus:ring-offset-2 focus:ring-offset-custom-black disabled:opacity-70 disabled:bg-custom-yellow-disabled transition-colors"
      >
        <IoSend size={23} className="text-current" /> {/* Ícone branco */}
      </button>
    </form>
  );
};
