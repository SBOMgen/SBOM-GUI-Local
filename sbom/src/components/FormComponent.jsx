import React, { useState } from 'react';

const FormComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [savedValue, setSavedValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSavedValue(inputValue);
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col items-center">
      <div>
        <input className="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:text-white placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900" placeholder="Input Path"  type="text"/>
      </div>
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
        Save
      </button>
      {savedValue && <p className="mt-4">Saved Value: {savedValue}</p>}
    </form>
  );
};

export default FormComponent;