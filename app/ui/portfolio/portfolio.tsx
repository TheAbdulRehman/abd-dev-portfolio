import { HeadingH2 } from "../Text/TextStyles";
import PortfolioContent from "./portfolio-content";
import Link from "next/link";
import { projects } from "@/app/lib/data";

const Portfolio = () => {
  return (
    <>
      <div className="mt-14 md:mt-20 lg:mt-32 container">
        <HeadingH2 className="text-white md:text-center">
          Projects I have worked on
        </HeadingH2>
      </div>
      <div className="mt-6 md:mt-9 lg:mt-12 container grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <PortfolioContent
            key={i}
            title={project.title}
            shortDescription={project.shortDescription}
            slug={project.slug}
            img={project.featuredImage}
            tags={project.tags}
          />
        ))}
      </div>
      <div className="container mt-8 lg:mt-14 mb-8 lg:mb-16  md:text-center">
        <Link
          href="/"
          className="bg-white font-medium text-gray-900 px-6 py-3 rounded-lg"
        >
          Visit All Portfolios
        </Link>
      </div>
    </>
  );
};

export default Portfolio;
