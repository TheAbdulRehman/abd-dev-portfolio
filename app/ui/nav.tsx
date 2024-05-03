"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { Text2xl } from "./Text/TextStyles";
import { usePathname } from "next/navigation";
import { unbounded } from "@/app/ui/fonts";

export default function NavBar() {
  const pathname = usePathname();
  const [scroll, setScroll] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const openNavHandler = () => {
    setOpenNav((prevState) => !prevState);
  };
  return (
    <nav
      className={`z-50 w-full ${
        scroll
          ? "fixed z-[200] top-0 left-0 bg-gray-800 py-4 backdrop-filter"
          : "relative py-4 lg:py-6"
      }`}
    >
      <div className="container flex items-center justify-between ">
        <div className="flex items-center">
          <Text2xl className={`text-white ${unbounded.className}`}>
            Abdul Rehman
          </Text2xl>
          <ul className="md:flex space-x-6 hidden lg:ms-16">
            <li className="relative">
              <Link
                href="/"
                className={` ${
                  pathname === "/" ? "text-yellow" : "text-white"
                }`}
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/about"
                className={`${
                  pathname === "/about" ? "text-yellow" : "text-white"
                }`}
              >
                About
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/projects"
                className={`${
                  pathname === "/projects" ? "text-yellow" : "text-white"
                }`}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <ul className="md:flex space-x-6 hidden lg:ms-16">
          <li>
            <Link
              href="mailto:im.abd.dev@gmail.com"
              target="_blank"
              className="text-white inline-flex items-center"
            >
              <MdArrowOutward className="me-1 text-base" /> Resume
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white inline-flex items-center"
            >
              <MdArrowOutward className="me-1 text-base" /> Linkedin
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="text-white inline-flex items-center"
            >
              <MdArrowOutward className="me-1 text-base" /> Github
            </Link>
          </li>
        </ul>
        <div className="block md:hidden" onClick={openNavHandler}>
          <svg
            className="cursor-pointer"
            width="30"
            height="14"
            viewBox="0 0 30 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.25H29"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M1 13.25H29"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div
          className={`block md:hidden transition-all duration-500 absolute top-0 py-5 ps-8 pe-5 left-0 w-screen h-auto ${
            openNav ? "translate-y-0" : "-translate-y-[130%]"
          }  bg-gray-800`}
        >
          <div className="flex justify-end">
            <svg
              onClick={openNavHandler}
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.75"
                y="1.61621"
                width="30.5"
                height="30.6341"
                rx="15.25"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M9.4043 10.4053L22.5942 23.5952"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M9.4043 23.4609L22.5942 10.271"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <ul className="space-y-4 mt-6">
            <li className="relative">
              <Link
                onClick={openNavHandler}
                href="/"
                className={` ${
                  pathname === "/" ? "text-yellow" : "text-white"
                }`}
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <Link
                onClick={openNavHandler}
                href="/about"
                className={`${
                  pathname === "/about" ? "text-yellow" : "text-white"
                }`}
              >
                About
              </Link>
            </li>
            <li className="relative">
              <Link
                onClick={openNavHandler}
                href="/projects"
                className={`${
                  pathname === "/projects" ? "text-yellow" : "text-white"
                }`}
              >
                Projects
              </Link>
            </li>
          </ul>
          <ul className="space-y-4 mt-10 mb-5">
            <li>
              <Link
                href="mailto:im.abd.dev@gmail.com"
                target="_blank"
                className="text-white inline-flex items-center"
              >
                <MdArrowOutward className="me-1 text-base" /> Resume
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white inline-flex items-center"
              >
                <MdArrowOutward className="me-1 text-base" /> Linkedin
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white inline-flex items-center"
              >
                <MdArrowOutward className="me-1 text-base" /> Github
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
