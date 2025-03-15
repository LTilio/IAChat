import React from "react";

export const ChatMessage = ({ message, isBot, timestamp }) => {
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"} mb-8`}>
      <div
        className={`max-w-[80%] md:max-w-[70%] rounded-lg p-4 ${
          isBot
            ? "bg-gray-100 text-gray-800"
            : "bg-yellow-500 text-white"
        } shadow-md mb-5`}
        style={{ wordWrap: "break-word" }} // Adiciona quebra de palavras
      >
        <p className="text-sm md:text-base whitespace-pre-wrap">{message}</p>
        <p
          className={`text-xs mt-1 ${
            isBot ? "text-gray-500" : "text-white"
          }`}
        >
          {timestamp}
        </p>
      </div>
    </div>
  );
};