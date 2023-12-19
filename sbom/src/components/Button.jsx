import React from 'react'

const Button = ({ children,style }) => {
  return (
    <button type="submit" style={style} className="w-full px-5 py-4 rounded-full text-white font-[700] hover:bg-secondary-cyangradient bg-secondary-bluegradient ">
      {children}
    </button>
  );
};

export default Button