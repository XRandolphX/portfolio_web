import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-20 xl:py-5 xl:pt-14 lg:pb-20 bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] md:max-w-[500px] lg:max-w-[600px] flex-col justify-center mx-auto text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Randolph </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Knowledge in front-end development with JavaScript, React,
              Next.js, HTML5 and CSS3, and basic back-end experience with PHP
              (Laravel), Node.js (Express.js) and Python. Introduction to mobile
              development with Kotlin (Android) and Flutter. Familiarity with
              MySQL and Firebase databases. Skills in Figma, WordPress and Git,
              and ability for simple full-stack projects. Focus on clean code,
              continuous learning and constant improvement.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Link
                href="https://drive.google.com/file/d/1aHTQF6snPOTr-OnMlKE0Jrdl2gXFLQrx/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Years of experience"
            /> */}

            <Badge
              containerStyles="absolute top-[70%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={5}
              // endCountText='k'
              badgeText="Finished Projects"
            />
            {/* <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={9}
              // endCountText='k'
              badgeText="Happy Clients"
            /> */}
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[520px] h-[520px] bg-no-repeat absolute -top-0 -right-8"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[460px] h-[460px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/perfil.png"
            />
          </div>
        </div>
        {/* icon */}
        {/* <div className="hidden md:flex absolute xl:left-2/4 lg:left-2/4  animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
