import React from "react";

export const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-2 p-4">
      <div className="flex space-x-1">
        <div
          className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
          style={{ animationDelay: "0ms" }}
        />
        <div
          className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
          style={{ animationDelay: "150ms" }}
        />
        <div
          className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
          style={{ animationDelay: "300ms" }}
        />
      </div>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Sentinel is typing...
      </span>
    </div>
  );
};
