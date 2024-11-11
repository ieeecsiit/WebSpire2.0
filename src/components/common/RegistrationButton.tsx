import React from 'react';

function RegisterButton() {
  return (
    <button
      className="overflow-hidden gap-2.5 self-stretch px-12 py-3 my-auto text-center whitespace-nowrap bg-red-700 border-2 border-red-700 rounded-xl max-md:rounded-lg min-w-[160px] max-md:px-3 max-md:py-2 max-md:min-w-[100px] max-md:text-xs hover:bg-[#cc1a1a] transition-colors" 
      aria-label="Register for WebSpire"
    >
      Register
    </button>
  );
}

export default RegisterButton;
