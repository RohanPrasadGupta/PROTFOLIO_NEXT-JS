import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import profilepic from "../../public/images/profile/developer-pic-2.png";
import Image from "next/image";
import Skill from "@/components/Skill";
import Experience from "@/components/Experience";
import Transitions from "@/components/Transitions";

const About = () => {
  return (
    <>
      <Head>
        <title>ROHAN PRASAD GUPTA | About page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Transitions />

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className={"p-16 pt-10 bg-gradient-to-tr from-green-400 to-blue-400"}>
          <AnimatedText
            text="Harnessing the Potential: A Passion for Ideas, Solutions and Coding!"
            className="mb-16 md:text-center text-4xl lg:text-!7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-light/90"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 md:gap-8 xs:gap-8">
            <div className="col-span-3 flex  flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-light/75 underline underline-offset-2 md:text-base sm:text-base xs:text-sm">
                About-Me
              </h2>

              <p className="font-medium my-1 md:text-sm sm:text-sm xs:text-sm text-light/90 text-justify">
                A Master's degree [AI and IoT] Computer Science Student. On my
                way to transform the complicated tech ideas into user-friendly
                websites.
              </p>

              <p className="font-medium my-2 md:text-sm sm:text-sm xs:text-sm text-light/90 text-justify">
                With my skills in programming, data analytics, and web
                development, I am excited to contribute to a team that values
                innovation and continuous learning. I'm open for any
                collaborations.
              </p>
            </div>

            <div className=" col-span-3 relative h-max rounded-2xl border-4 border-solid border-dark/75 bg-light xl:col-span-4 md:order-1 md:col-span-8 sm:col-span-8 xs:col-span-8">
              <div className="absolute top-0 -right-3 -z-10  w-[102%] h-[103%] rounded-[1rem] bg-light/75" />
              <Image
                src={profilepic}
                alt="ROHAN"
                className="w-full h-auto rounded-2xl "
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw , 33vw"
              />
            </div>

            <div className="col-span-2 flex-col text-center xl:col-span-8 xl:flex-row xl:text-center md:order-3 md:col-span-8 sm:text-center md:text-center xs:text-center md:flex-row sm:flex-col xs:flex-col md:flex sm:flex xs:flex md:justify-between md:items-center sm:justify-between sm:items-center xs:justify-between xs:items-center  ">
              <div className="my-20 xs:my-1 md:my-1 flex-col">
                <span className="bg-dark text-white p-4 rounded-full text-5xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  5+
                </span>
                <h2 className="my-10 text-3xl font-medium capitalize text-light/90 md:text-2xl sm:text-xl xs:text-lg">
                  Projects
                </h2>
              </div>

              <div className="my-8 flex-col md:my-1 xs:my-1">
                <span className="bg-dark text-white p-4 rounded-full text-5xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  8+
                </span>
                <h2 className="my-10 text-3xl font-medium capitalize text-light/90 xs:text-lg md:text-2xl sm:text-xl">
                  Skills
                </h2>
              </div>
              <div className="my-8 flex-col md:my-1 xs:my-1">
                <span className="text-5xl p-4 md:text-5xl  sm:text-5xl  xs:text-5xl">&#128522;</span>
                <h2 className="my-6 text-3xl font-medium capitalize text-light/90 md:text-2xl sm:text-xl xs:text-lg"> 
                  Happy to Help :)
                </h2>
              </div>
            </div>
          </div>

          <Skill  />
          <Experience  />
        </Layout>
      </main>
    </>
  );
};

export default About;
