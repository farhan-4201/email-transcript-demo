import React from "react";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="flex flex-col items-center justify-center">
        <div className="text-white mb-2 text-lg">Loading ...</div>
        <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Spinner;
