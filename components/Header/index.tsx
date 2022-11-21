import React from "react";
import style from "./Header.module.css";
import { Noto_Sans, Open_Sans } from "@next/font/google";

const noto = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-open",
});

const Header = () => {
  return (
    <nav
      className={`${noto.variable} flex justify-between flex-row text-[16px]`}
    >
      <div className={`font-bold text-[40px] ${style.nav_logo}`}>mfyz.</div>
      <div className="flex gap-3 items-center sm:gap-8">
        <div className={style.nav_link}>experiences</div>
        <div className={style.nav_link}>about</div>
        <div className={style.nav_link}>contact</div>
      </div>
    </nav>
  );
};

export default Header;
