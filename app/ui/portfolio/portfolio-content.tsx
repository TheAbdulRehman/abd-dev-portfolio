import { HeadingH5 } from "../Text/TextStyles";
import PortfolioCard from "./portfolio-card";
import Image from "next/image";

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
    <PortfolioCard>
      <Image
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        height="1000"
        width="1000"
        className="h-[400px] w-full object-cover rounded-xl group-hover/card:shadow-xl mb-4"
        alt="thumbnail"
        loading="lazy"
      />
      <HeadingH5 className="capitalize text-white mb-2">{title}</HeadingH5>
      <div className="text-white">React, Next js, Tailwind CSS</div>
    </PortfolioCard>
  );
};

export default PortfolioContent;
