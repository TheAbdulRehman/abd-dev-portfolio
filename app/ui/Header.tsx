import { HeaderHeading } from "@/app/ui/Text/TextStyles";
import { unbounded } from "@/app/ui/fonts";

const Header = () => {
  return (
    <>
      <div>
        <div className="container">
          <header className="flex flex-col md:items-center md:justify-center pt-6 md:pt-9 lg:pt-12">
            <h3 className="text-lg md:text-xl lg:text-2xl text-white font-medium md:text-center">
              Hi there
            </h3>
            <HeaderHeading
              className={`mt-2 md:mt-6 lg:mt-8 ${unbounded.className} text-white text-start md:text-center xl:px-12`}
            >
              I am Abdul Rahman.{" "}
              <span className="text-yellow rounded-lg capitalize">
                front end developer
              </span>{" "}
              having expertise in creating dynamic interactive web experiences
            </HeaderHeading>
            <h5
              className={`mt-5 md:mt-9 lg:mt-12 text-base md:text-lg lg:text-xl md:font-medium text-white leading-[170%] md:text-center xl:w-[70%]`}
            >
              Seasoned front-end developer with a knack for translating designs
              into pixel-perfect, responsive interfaces. Experienced in
              integrating APIs to deliver dynamic and interactive web solutions.
            </h5>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
