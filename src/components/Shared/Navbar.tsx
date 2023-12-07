import { MessagesSquare, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-[#1776fa] text-white">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown" onClick={toggleDropdown}>
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-[#191e24] text-gray-400 rounded-box w-60 z-10"
              >
                <li>
                  <a>Magazines</a>
                  <ul className="p-2">
                    <li className="">
                      <Link href="/packages">Packages</Link>
                    </li>
                    <li>
                      <Link href="/television">Television</Link>
                    </li>
                    <li className="text-md">
                      <Link href="/internet">Internet</Link>
                    </li>
                    <li className="text-md">
                      <Link href="/phone">Phone</Link>
                    </li>
                  </ul>
                </li>
                <li className="text-md">
                  <Link href="/packages">Packages</Link>
                </li>
                <li className="text-md">
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="text-md">
                  <Link href="/support">Support</Link>
                </li>
                <li className="text-2xl">
                  <a>English</a>
                </li>
                <div>
                  <button className="btn btn-ghost btn-circle">
                    <Search />
                  </button>
                  <div
                    className="tooltip  tooltip-bottom"
                    data-tip="Chat with an agent"
                  >
                    <button className="btn btn-ghost btn-circle">
                      <MessagesSquare />
                    </button>
                  </div>
                </div>
              </ul>
            )}
          </div>
          <Image src="/images/logo2.png" alt="logo" width={300} height={200} />
        </div>
        <div className="navbar-end hidden lg:flex z-10">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="">Magazines</summary>
                <ul className="bg-[#191e24] z-[1] menu p-2 w-52">
                  <li className="">
                    <Link href="/packages">Packages</Link>
                  </li>
                  <li>
                    <Link href="/television">Television</Link>
                  </li>
                  <li>
                    <Link href="/internet">Internet</Link>
                  </li>
                  <li>
                    <Link href="/phone">Phone</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/packages">Packages</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/support">Support</Link>
            </li>
            <li>
              <a>English</a>
            </li>
          </ul>
          <div>
            <button className="btn btn-ghost btn-circle">
              <Search />
            </button>
            <div
              className="tooltip  tooltip-bottom"
              data-tip="Chat with an agent"
            >
              <button className="btn btn-ghost btn-circle">
                <MessagesSquare />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
