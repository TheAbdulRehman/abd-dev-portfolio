"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";
import { Text2xl } from "./Text/TextStyles";
import { usePathname } from "next/navigation";
import { unbounded } from "@/app/ui/fonts";

export default function NavBar() {
  const pathname = usePathname();
  const [scroll, setScroll] = useState(false);
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
        <div className="block  md:hidden">
          <RiMenu4Fill className="text-white text-3xl cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
