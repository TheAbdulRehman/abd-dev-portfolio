import Link from "next/link";
import { HeaderHeading, TextXl } from "@/app/ui/Text/TextStyles";
import { BackgroundBeams } from "./ui/background-beams";
import { FaArrowRight } from "react-icons/fa";

export default function Page() {
  return (
    <>
      <div className="bg-black">
        <nav className="flex items-center justify-between container py-6 z-50 relative">
          <h3 className="text-2xl font-bold text-white">Abdul Rehman</h3>
          <ul className="flex gap-x-4 px-2 rounded-full py-3 bg-gray-800 border  border-gray-700">
            <li>
              <Link
                href="/"
                className="text-white bg-slate-600 px-4 py-2 rounded-full"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white px-4 py-2">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white px-4 py-2">
                Skills
              </Link>
            </li>
          </ul>
          <Link
            href="/contact"
            className="bg-[#ffee00] flex items-center gap-x-4 pl-4 pe-3 py-2.5 font-semibold rounded-full text-black"
          >
            Let's Talk{" "}
            <span className="w-8 h-8 p-2 rounded-full bg-white flex items-center justify-center">
              <FaArrowRight />
            </span>
          </Link>
        </nav>
        <div className="container">
          <header className="flex lg:flex-col items-center justify-center pt-24 pb-20">
            <h3 className="text-2xl text-white font-medium text-center">
              Hi there
            </h3>
            <HeaderHeading className={`mt-8 text-white text-center xl:px-12`}>
              I am Abdul Rahman.{" "}
              <span className="text-[#ffee00] rounded-lg capitalize">
                front end developer
              </span>{" "}
              having expertise in creating dynamic interactive web experiences
            </HeaderHeading>
            <TextXl
              className={`lg:mt-12 text-white leading-[170%] text-center xl:w-[70%]`}
            >
              Seasoned front-end developer with a knack for translating designs
              into pixel-perfect, responsive interfaces. Experienced in
              integrating APIs to deliver dynamic and interactive web solutions.
            </TextXl>
            <BackgroundBeams />
          </header>
        </div>

        <main className="flex bg-white flex-col p-6"></main>
      </div>
    </>
  );
}
