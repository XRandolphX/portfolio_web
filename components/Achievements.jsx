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
import CardA from "@/components/CardA";
import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

const projectData = [
  {
    image: "/work/achievements/Proof_of_pre-professional_internship_2023.png",
    category: "experience",
    name: "Systems Administrator Intern",
    description:
      "Systems Administrator Intern at the private educational institution Ricardo Palma in Sullana.",
    time: "From March 4th to December 15th, 2023",
    link: "https://drive.google.com/file/d/1J9shOA3pPFUQzF7pP0xKpR_XG2LiYisa/view?usp=drive_link",
  },
  {
    image: "/work/achievements/Certificate_of_English_Practice_2021.png",
    category: "experience",
    name: "English instructor trainee",
    description:
      "Service commitment to Peru Pronabec as a trainee Instructor of the English language at Educational Institution 14787 Victor Raul Haya de la Torre in Sullana.",
    time: "From March to December, 2021",
    link: "https://drive.google.com/file/d/13gtv7Mj6Ni9AxyuMfRUsUxJ8yj9Sv910/view?usp=drive_link",
  },
  {
    image: "/work/achievements/PEI_Rosa_Mistica_Certificate_2023.png",
    category: "experience",
    name: "Computer Science Instructor",
    description:
      "Computer Science Instructor adept at delivering engaging lessons and fostering student mastery.",
    time: "From May 26th, 2022, to December 16th, 2023",
    link: "https://drive.google.com/file/d/1kAb4zULO7F4665WtURFPQrW4cm4WNXLI/view?usp=drive_link",
  },

  {
    image: "/work/achievements/Merit_Diploma.png",
    category: "achievements",
    name: "Merit Diploma",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sed?",
    link: "https://drive.google.com/file/d/1lr2RkZuCQCMWePsSdJjbs8krNJoThf53/view?usp=drive_link",
  },
  {
    image: "/work/achievements/Expowork_Sales_System_Certificate_2020.png",
    category: "achievements",
    name: "Lumina Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sed?",
    link: "https://drive.google.com/file/d/1S3OOJdHblm7s9eFH9_RvtU0mtrSnNQnL/view?usp=drive_link",
  },
  {
    image:
      "/work/achievements/International_Expo_Work_3D_Modeling_Certificate_2022.png",
    category: "achievements",
    name: "Evolve Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sed?",
    link: "https://drive.google.com/file/d/1hEV5W9QO0QjeIecmAqfNl-WAc1HODg_b/view?usp=drive_link",
  },
  {
    image: "/work/achievements/Fair_3D_Modeling_Certificate_2022.png",
    category: "achievements",
    name: "Lumina Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sed?",
    link: "https://drive.google.com/file/d/1b4F2QKDUcQOQ0hGQuUIoy_f3vv0D5bDJ/view?usp=drive_link",
  },
  {
    image: "/work/achievements/Fair_Mobile_App Certificate_2022.png",
    category: "achievements",
    name: "Evolve Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sed?",
    link: "https://drive.google.com/file/d/1sRqTDVm8kmEPlZY19KWV3Iymc9lXUkDv/view?usp=drive_link",
  },
  {
    image:
      "/work/achievements/International_Smart_Irrigation_System_Certificate_2023.png",
    category: "achievements",
    name: "Evolve Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sed?",
    link: "https://drive.google.com/file/d/17ynSoFcOswOM1TnVn_SxOCIyogBrlxMM/view?usp=drive_link",
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
  // console.log(filteredProjects);

  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-2 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
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
              className="xl:h-[550px] lg:h-[570px] md:h-[640px] sm:h-[720px]"
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
                  <CardA project={project} />
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
