import { HeadingH5, TextBase } from "../Text/TextStyles";
import PortfolioCard from "./portfolio-card";
import Image from "next/image";
import Link from "next/link";
import Acme from "@/public/hero-desktop.png";
import Tag from "../tag";

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
        <div className="relative z-[3]">
          <div className="flex items-start justify-between">
            <div className="pe-2 md:pe-4 mb-4 md:mb-6">
              <HeadingH5 className="capitalize text-white mb-1.5">
                {title}
              </HeadingH5>
              <TextBase className="text-white line-clamp-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                similique laboriosam et. Ipsa enim soluta iure tenetur eligendi
                quis reiciendis.
              </TextBase>
            </div>
            <div>
              <Link href="/" className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="23"
                    height="23"
                    rx="4.5"
                    stroke="white"
                  />
                  <path
                    d="M8.45875 7.08031L16.9807 7.08019M16.9807 7.08019L16.9807 15.481M16.9807 7.08019L7.08125 16.9797"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <Image
            src={Acme}
            height="1000"
            width="1000"
            className="h-[320px] md:h-[400px] w-full object-cover rounded-xl shadow-baseLight mb-4 lg:mb-6"
            alt="thumbnail"
            loading="lazy"
          />
          <div className="flex gap-2.5 md:gap-3 flex-wrap">
            {["Next.js", "React.js", "Node.js", "Tailwind CSS"].map(
              (tag, i) => (
                <Tag key={i} text={tag} />
              )
            )}
          </div>
        </div>
      </PortfolioCard>
    </>
  );
};

export default PortfolioContent;
