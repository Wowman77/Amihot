import React, { useState } from "react";

const PopupSignIn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <a
        href="#"
        onClick={handleClick}
        className="text-blue-500 hover:text-blue-700"
      >
        Open Popup
      </a>

      {isOpen && (
        <div
          onClick={handleClose}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Popup Content</h2>
            <p className="mb-4">This is the content of the popup.</p>
            <button
              onClick={handleClose}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-black rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupSignIn;
