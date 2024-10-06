import React, { FC } from "react";
import { Logo } from "../atoms/logo";
import Link from "next/link";
export const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full">
      <div></div>
      <div></div>
      <div>
        <Logo />
        <nav>
          <ul>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
