import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white flex items-center justify-center mt-auto">
      <div className="text-white font-thin flex flex-row-reverse items-center gap-3">
        <span>Paste Here &#169; 2024</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fef9c3"
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-copy-check"
        >
          <path d="m12 15 2 2 4-4" />
          <rect width={14} height={14} x={8} y={8} rx={2} ry={2} />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
