import React, { ReactNode } from "react";

interface RootProps {
  children: ReactNode;
}

const Icon: React.FC<RootProps> = ({ children }) => {
  return (
    <div className="w-10 h-10 bg-black flex justify-center items-center rounded-lg">
      {children}
    </div>
  );
};

export default Icon;
