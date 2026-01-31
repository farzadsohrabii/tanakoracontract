"use client";
import { useEffect, useState } from "react";

export default function HeaderScroll() {
  const [active, setActive] = useState("agreement");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handler = () => {
      sections.forEach((sec) => {
        const top = sec.offsetTop - 120; // ارتفاع هدر
        const bottom = top + sec.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(sec.id);
        }
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className=" w-[80%] flex items-center ">
      <nav className="flex flex-row-reverse gap-7 bg-amber-500 ml-5">
        <a
          href="#about"
          className={active === "agreement" ? "font-bold" : "font-normal"}
        >
         معرفی
        </a>

        <a
          href="#agreement "
          className={active === "about" ? "font-bold" : "font-normal"}
        >
         قرارداد
        </a>

        <a
          href="#confirm"
          className={active === "confirm" ? "font-bold" : "font-normal"}
        >
         ثبت نام
        </a>
      </nav>
    </div>
  );
}