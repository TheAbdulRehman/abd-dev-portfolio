import { HeaderHeading } from "@/app/ui/Text/TextStyles";
import { unbounded } from "@/app/ui/fonts";

const Header = () => {
  return (
    <>
      <div className="">
        <div className="container">
          <header className="flex flex-col items-center justify-center pt-12">
            <h3 className="text-2xl text-white font-medium text-center">
              Hi there
            </h3>
            <HeaderHeading
              className={`mt-8 ${unbounded.className} text-white text-center xl:px-12`}
            >
              I am Abdul Rahman.{" "}
              <span className="text-yellow rounded-lg capitalize">
                front end developer
              </span>{" "}
              having expertise in creating dynamic interactive web experiences
            </HeaderHeading>
            <h5
              className={`lg:mt-12 text-xl font-medium text-white leading-[170%] text-center xl:w-[70%]`}
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
