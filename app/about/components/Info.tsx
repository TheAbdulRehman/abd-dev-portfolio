import { BodyText, HeadingH5 } from "@/app/ui/Text/TextStyles";

const Info = () => {
  return (
    <>
      <div className="mb-8 lg:mb-12  xl:pe-16">
        <HeadingH5 className="text-white font-bold mb-4">
          Hi I’m Abdul Rehman.
        </HeadingH5>
        <p className="text-white text-base leading-7">
          <span className="text-yellow"> Front-End Developer</span> with
          expertise in translating designs into pixel-perfect, responsive
          interfaces. Experienced in integrating APIs to deliver dynamic and
          interactive web solutions.
        </p>
      </div>
      <div className="mb-8 lg:mb-12 xl:pe-16">
        <HeadingH5 className="text-white font-semibold mb-4">
          My Story
        </HeadingH5>
        <p className="text-white text-base leading-7 mb-2">
          In 2021, I worked as a MAths teacher in my home town Narowal,
          Pakistan. However, during the COVID-19 pandemic, I discovered web
          development through friends and quickly became passionate about it.
          With ample time to learn during the outbreak, I delved into web
          development and never looked back.
        </p>
        <p className="text-white text-base leading-7 mb-4">
          My expertise are{" "}
          <span className="text-yellow">
            {" "}
            HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, React.js, Next.js
          </span>{" "}
          . I have more than 2 years (2 years and 6 months) of experience in
          front end web design and web development. I have completed more than
          25 projects including Figma, XD, AI,PSD to Html, Bootstrap, Tailwind
          CSS, React JS and few in Next.JS. Also have good understanding of
          UI/UX principle and love to work with FIGMA in my free time too.
          skills.
        </p>
        <p className="text-white text-base leading-7">
          I love learning and always try to to learn new things and trends.
          Right now I am working on few react js projects and also learning and
          practicing JavaScript in depth to enhance my JavaScript and React JS
        </p>
      </div>
      <div className="mb-8 lg:mb-10 xl:pe-16">
        <HeadingH5 className="text-white font-semibold mb-4">
          Collaborative Aspirations
        </HeadingH5>
        <p className="text-white text-base leading-7 ">
          My aim is to collaborate with teams where I can contribute my
          expertise, add value, and continuously grow professionally while
          embracing industry standards.
        </p>
      </div>
    </>
  );
};

export default Info;
