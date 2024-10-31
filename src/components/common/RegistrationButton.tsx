import React from 'react';

function RegisterButton() {
  return (
    <button 
      className="overflow-hidden flex-1 shrink gap-2.5 self-stretch p-4 my-auto max-w-[200px] text-center whitespace-nowrap rounded-xl border-2 border-red-700 border-solid min-w-[160px] max-md:px-3 hover:bg-red-700 transition-colors"
      aria-label="Register for WebSpire"
    >
      Register
    </button>
  );
}

export default RegisterButton;