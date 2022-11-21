import Image from "next/image";
import React from "react";
import mainPng from "../../public/main.png";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

const Main = () => {
  return (
    <div className="flex justify-between sm:flex-row flex-col w-auto">
      <div className="flex-1 flex justify-end mb-10 sm:mb-0">
        <Image src={mainPng} alt="main image" />
      </div>

      <div className="flex items-center flex-1">
        <div>
          <div className="font-bold text-4xl text-center sm:my-2 my-6 tracking-wide">
            Hallo, I'm Ferdiyanzah
          </div>
          <div className="tracking-wide text-center">
            A software developer with years of experience. My expertise lies in
            front-end web applications, and the main languages in my technology
            suite are{" "}
            <span className="border-b-2 border-black">TypeScript</span>,{" "}
            <span className="border-b-2 border-black">React</span>,{" "}
            <span className="border-b-2 border-black">Next.JS</span>, and of
            course <span className="border-b-2 border-black">HTML/CSS</span>.
            Sometimes I use{" "}
            <span className="border-b-2 border-black">Python</span> and{" "}
            <span className="border-b-2 border-black">AWS</span>. I'm a lifelong
            learner (currently taking a course on building Mobile Apps with
            Flutter).
          </div>
          <div className="flex gap-6 justify-center my-4">
            <a
              href="mailto:mferdiyanzah@gmail.com"
              className="hover:opacity-100 opacity-70"
            >
              <FiMail size="1.75em" />
            </a>
            <a
              href="https://www.linkedin.com/in/mferdiyanzah/"
              className="hover:opacity-100 opacity-70"
              target="_blank"
            >
              <FiLinkedin size="1.75em" />
            </a>
            <a
              href="https://github.com/mferdiyanzah"
              className="hover:opacity-100 opacity-70"
              target="_blank"
            >
              <FiGithub size="1.75em" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
