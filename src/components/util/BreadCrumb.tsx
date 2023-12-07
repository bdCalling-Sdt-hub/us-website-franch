import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

type ITitle = string;

const BreadCrumb: React.FC<{ title: ITitle }> = ({ title }) => {
  return (
    <div className="text-sm breadcrumbs my-8 text-gray-400">
      <ul>
        <li>
          <Link href="/" className="flex items-center gap-1">
            <Home size={18} />
            <span className="text-[18px]">Home</span>
          </Link>
        </li>
        <li>
          <span className="inline-flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            <span className="text-[18px]">{title}</span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
