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
import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

const projectData = [
  {
    image: "/work/1.png",
    category: "experience",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sed?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "experience",
    name: "Solstice Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sed?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "experience",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sed?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "experience",
    name: "Solstice Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sed?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "achievements",
    name: "Lumina Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sed?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "achievements",
    name: "Evolve Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sed?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "achievements",
    name: "Lumina Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sed?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "achievements",
    name: "Evolve Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sed?",
    link: "/",
    github: "/",
  },
];

const uniqueCategories = [...new Set(projectData.map((item) => item.category))];

const Achievements = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState(categories[0]);

  const filteredProjects = projectData.filter((project) => {
    //return category
    return project.category === category;
  });
  console.log(filteredProjects);

  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full    md:grid-cols-2 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* slider */}
          <div>
            <Swiper
              className="h-[480px]"
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
              {/* show content from category */}
              {filteredProjects.map((project, index) => (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Achievements;
