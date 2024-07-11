import { FaExternalLinkAlt } from "react-icons/fa";
export default function Home() {
  return (
    <main className="max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto px-2">
      <div className="mt-8 p-4">
        <img src="/gerin.svg" alt="" className="m-auto mb-2" />
        <div className="text-center">
          <h1 className="text-2xl font-bold">Hello World, I'm Gerin!</h1>
          <p className="mb-4 font-light">
            Backend Engineer | Full Stack Engineer
          </p>
        </div>
        {/* ABOUT ME SECTION */}
        <section className="mb-7">
          <h2 className="text-xl font-bold mb-2">About Me</h2>
          <p className="text-base">
            I have over 2 years of experience in software engineering, beginning
            my journey as a UI and UX Designer, then progressing to Front End
            development, and currently focusing on Back End development. I
            initiated several projects starting in my second year at university,
            and I now have more than 2 year of professional work experience.
          </p>
        </section>
        {/* WORK EXPERIENCES SECTION */}
        <section className="mb-7">
          <h2 className="text-xl font-bold mb-2">Work Experiences</h2>
          <div className="flex flex-wrap mb-7">
            <div className="w-full md:w-1/2 ">
              <p className="font-extralight italic"> 2022 - present</p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center">
                <p className="font-bold mr-2">eFishery</p>
                <a
                  href="https://efishery.com"
                  className="text-white"
                  target="_blank"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
              <p className="font-semibold">Backend Engineer</p>
              <p className="text-sm italic">Go | Postgres | Microservices</p>
            </div>
          </div>
          <div className="flex flex-wrap mb-7">
            <div className="w-full md:w-1/2 ">
              <p className="font-extralight italic"> 2022 - 2022</p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center">
                <p className="font-bold mr-2">Metrobiz</p>
              </div>
              <p className="font-semibold">Full Stack Developer</p>
              <p className="text-sm italic">React.js | Laravel</p>
            </div>
          </div>
          <div className="flex flex-wrap mb-7">
            <div className="w-full md:w-1/2 ">
              <p className="font-extralight italic"> 2021 - 2022</p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center">
                <p className="font-bold mr-2">Vocasia</p>
                <a
                  href="https://vocasia.id"
                  className="text-white"
                  target="_blank"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
              <p className="font-semibold">Front End Developer Intern</p>
              <p className="text-sm italic">React.js | Typescript</p>
            </div>
          </div>
        </section>
        {/* SIDE PROJECTS SECTION */}
        <section>
          <h2 className="text-xl font-bold mb-2">Side Projects</h2>
          <div className="flex flex-wrap mb-7">
            <div className="w-full md:w-1/2 ">
              <p className="font-extralight italic"> 2023 - present</p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center">
                <p className="font-bold mr-2">Nomokit</p>
                <a
                  href="https://nomo-kit.com"
                  className="text-white"
                  target="_blank"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
              <p className="font-light">
                Nomokit is a platform for students to learn coding and robotics
                using block-based coding, built on top of Scratch technology.
              </p>
              <p className="text-sm font-extralight italic">
                Laravel | React | Scratch
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
