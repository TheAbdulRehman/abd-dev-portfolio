import Header from "@/app/ui/Header";
import Portfolio from "@/app/ui/portfolio/portfolio";
import About from "@/app/ui/about/about";
import { HeadingH5 } from "./ui/Text/TextStyles";

export default function Page() {
  return (
    <>
      <div id="home">
        <Header />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="about bg-12">
        <About />
      </div>
    </>
  );
}
