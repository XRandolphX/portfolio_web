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
              Passionate about technology and in constant search of learning.
              Specialized in web development, with a focus on creating scalable
              and efficient solutions. I enjoy working in teams, collaborating
              on practical projects and exploring new tools and technologies. My
              goal is to continue growing as a professional, adding value
              through my work and being an active part of the technological
              evolution.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Link
                href="https://drive.google.com/file/d/11d55eG48Mlr_s1s4W6HZKxfPnjnXgcc4/view?usp=drive_link"
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
