import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";
import { Text2xl } from "./Text/TextStyles";
import { unbounded } from "@/app/ui/fonts";

export default function Footer() {
  return (
    <footer className={`z-50 w-full relative py-4 lg:py-6 bg-gray-800`}>
      <div className="container">
        <p className="text-base text-white">
          Design & Developed By <span className="font-bold">Abdul Rehman</span>
        </p>
      </div>
    </footer>
  );
}
