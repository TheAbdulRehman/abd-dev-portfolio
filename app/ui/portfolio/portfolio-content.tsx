import { HeadingH5 } from "../Text/TextStyles";
import PortfolioCard from "./portfolio-card";
import Image from "next/image";
import Link from "next/link";
import Acme from "@/public/hero-desktop.png";

interface PortfolioContentProps {
  title?: string;
  shortDescription?: string;
  img?: string;
  tags?: string[];
  slug?: string;
}

const PortfolioContent: React.FC<PortfolioContentProps> = ({
  title,
  shortDescription,
  img,
  tags,
  slug,
}) => {
  return (
    <>
      <PortfolioCard>
        <Image
          src={Acme}
          height="1000"
          width="1000"
          className="h-[400px] w-full object-cover rounded-xl group-hover/card:shadow-xl mb-4"
          alt="thumbnail"
          loading="lazy"
        />
        <HeadingH5 className="capitalize  text-white mb-2">{title}</HeadingH5>
        <div className="text-white">React, Next js, Tailwind CSS</div>
        <div className="mt-7 mb-2">
          <Link
            href="/"
            className="border-[#6b6b6b33]  w-fit border bg-gray-700 rounded-lg text-white px-6 py-3 mt-4"
          >
            Project Highlights
          </Link>
        </div>
      </PortfolioCard>
    </>
  );
};

export default PortfolioContent;
