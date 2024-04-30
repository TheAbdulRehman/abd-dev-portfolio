import { HeadingH2 } from "../Text/TextStyles";
import PortfolioContent from "./portfolio-content";

const Portfolio = () => {
  return (
    <>
      <div className="mt-20 md:mt-24 lg:mt-32 container">
        <HeadingH2 className="text-white text-center">
          Projects I have worked on
        </HeadingH2>
      </div>
      <div className="mt-8 mb-8 lg:mb-16 lg:mt-12 container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PortfolioContent title="portfolio title" />
        <PortfolioContent title="portfolio title" />
        <PortfolioContent title="portfolio title" />
        <PortfolioContent title="portfolio title" />
      </div>
    </>
  );
};

export default Portfolio;
