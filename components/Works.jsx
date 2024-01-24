"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/projects/document_manager.png",
    category: "react js",
    name: "Document Manager",
    description:
      "Document generator and manager for the private educational institution Ricardo Palma in Sullana. I helped myself to hostinger for the backend.",
    technologies: "Technologies: React JS, PHP, Firebase, Chatgpt API",
    demo: "Demo: Not Available",
    link: "/",
    github: "https://github.com/XRandolphX/document_manager",
  },
  {
    image: "/work/projects/app_inserge.png",
    category: "flutter",
    name: "Inserge App",
    description:
      "Mobile app managing construction project records and generating reports. Utilizes natural language API for search functionality.",
    technologies:
      "Technologies: Flutter, Unity, Python, Flask, NumPy, Firebase",
    demo: "Demo: Not Available",
    link: "/",
    github: "https://github.com/XRandolphX/ISG_MobileApp_Reports",
  },
  {
    image: "/work/projects/inserge.png",
    category: "Bootstrap",
    name: "Logistics System Inserge",
    description:
      "Development of a web-based solution to improve and streamline logistics operations of the construction company Inserge.",
    technologies: "Technologies: CodeIgniter, Bootstrap, MySQL, jQuery",
    demo: "Demo: Not Available",
    link: "/",
    github: "https://github.com/XRandolphX/logistic_system_inserge",
  },
  {
    image: "/work/projects/irrigation_app.png",
    category: "MIT App Inventor",
    name: "Smart Irrigation Application",
    description:
      "The mobile application allows control, as well as viewing soil statistics, and enables water supply to the controlled area in three modes: manual, automatic, and programmed.",
    technologies: "Technologies: C++, Arduino IDE, MIT App Inventor",
    demo: "Demo: Not Available",
    link: "/",
    github: "https://github.com/XRandolphX/Smart_Irrigation_App",
  },
  {
    image: "/work/projects/light_consume.png",
    category: "JavaFX",
    name: "Electricity Bill Manager",
    description:
      "Desktop application for managing electricity bills and calculating the energy consumption of household appliances.",
    technologies: "Technologies: JavaFX, Scene Builder, SQL Server",
    demo: "Demo: Not Available",
    link: "/",
    github: "https://github.com/XRandolphX/LightConsume",
  },
];

const Works = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container relative mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            These are the last projects I have done.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="xl:h-[610px] lg:h-[610px] md:h-[670px] sm:h-[740px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 3).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Works;
