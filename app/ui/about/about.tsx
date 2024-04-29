import { BodyText, HeadingH2 } from "@/app/ui/Text/TextStyles";

const About = () => {
  return (
    <>
      <div className="mt-16 md:mt-20 lg:mt-24 container">
        <HeadingH2 className="text-white font-bold mb-9">About Me</HeadingH2>
        <BodyText className="text-white mb-12">
          Hello! I'm [Your Name], a passionate front-end developer with a keen
          eye for design and a love for creating intuitive user experiences.
          With [number] years of experience in web development, I specialize in
          crafting beautiful and responsive websites that not only look great
          but also function flawlessly across various devices.
        </BodyText>
      </div>
    </>
  );
};

export default About;
