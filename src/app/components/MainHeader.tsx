import SideNav from "./SideNav";
import Link from "next/link";
import { routingLinks } from "../../utils/links";

export default function MainHeader() {
  return (
    <div className="fixed top-0 left-0 h-[68px] w-full z-[200] ">
      <SideNav />
      <nav className="hidden md:block">
        <div className="h-[68px] flex justify-center items-center">
          <ul className="h-[50px] flex items-center px-6 space-x-5 rounded-full bg-[#222223] opacity-90  shadow-[inset_4px_4px_8px_rgba(255,255,255,0.1),_inset_-4px_-4px_8px_rgba(0,0,0,0.5)]">
            {routingLinks.map(({ linkName, href }) => {
              return (
                <li key={href} className="hover:text-yellow-500">
                  <Link href={href}>{linkName}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}
