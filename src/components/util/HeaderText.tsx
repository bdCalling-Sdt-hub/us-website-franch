import { ReactNode } from "react";

interface ReactProps {
  children: ReactNode;
}

const HeaderText: React.FC<ReactProps> = ({ children }) => {
  return (
    <div className="my-12  text-gray-400">
      <h1 className="text-4xl font-medium">{children}</h1>
      <div className="border-b-4 w-52 my-5 border-[#1775fa]" />
    </div>
  );
};

export default HeaderText;
