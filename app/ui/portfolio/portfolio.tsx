import { HeadingH2 } from "../Text/TextStyles";
import PortfolioContent from "./portfolio-content";

const Portfolio = () => {
  return (
    <>
      <div className="mt-16 md:mt-20 lg:mt-24 container">
        <HeadingH2 className="text-white ">Projects I have worked on</HeadingH2>
      </div>
      <div className="mt-8 lg:mt-12 container grid grid-cols-2 gap-8">
        <PortfolioContent title="portfolio title" />
        <PortfolioContent title="portfolio title" />
        <PortfolioContent title="portfolio title" />
        <PortfolioContent title="portfolio title" />
      </div>
    </>
  );
};

export default Portfolio;
