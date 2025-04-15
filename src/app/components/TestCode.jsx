import React, { useState } from 'react';

const TestCode = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (

    <>
      <div className='mt-[10rem] flex flex-col min-h-96 w-80'>
        <div className='rounded-lg shadow-md'>
          <div
            className="flex items-center justify-between p-4 cursor-pointer bg-gray-50"
            onClick={toggleOpen}
          >
            <h3 className="text-lg font-medium text-gray-800">Click me to toggle</h3>
            {isOpen ? (
              <div className="w-5 h-5 text-gray-600 transition-transform duration-700">sdf</div>
            ) : (
              <div className="w-5 h-5 text-gray-600 transition-transform duration-700">sdfdd</div>
            )}
          </div>
          <div
            className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <div className="p-4 pb-2 text-gray-600">
              <p>This is the content that will expand downward when opened!</p>
              <p>You can put any React components here.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestCode;