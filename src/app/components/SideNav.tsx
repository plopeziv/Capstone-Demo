"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import HamburgerIcon from "./HamburgerIcon";
import { routingLinks } from "../../utils/links";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const closeSideNav = () => {
    setIsOpen(false);
  };

  const openSideNav = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    closeSideNav();
  }, [pathName]);

  return (
    <div className="md:hidden">
      {!isOpen && <HamburgerIcon openSideNav={openSideNav} />}
      {isOpen && (
        <nav className="fixed top-0 left-0 h-full w-[360px] bg-black opacity-90 shadow-[2px_0px_5px_rgba(0,0,0,0.5)]">
          <button
            className="size-8 absolute top-4 right-4 text-3xl cursor-pointer hover:text-yellow-500"
            onClick={closeSideNav}
          >
            X
          </button>
          <ul className="m-10 space-y-[15px] text-2xl text-center cursor-pointer">
            {routingLinks.map(({ linkName, href }) => {
              return (
                <li key={href} className="hover:text-yellow-500">
                  <Link href={href}>{linkName}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}
