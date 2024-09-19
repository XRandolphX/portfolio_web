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
    image: "/work/achievements/ugel_sullana_certificate.png",
    category: "experience",
    name: "Web developer",
    description:
      "Web development with PHP and Laravel.",
    workplace: "UGEL Sullana",
    time: "From February to June, 2024",
    link: "https://drive.google.com/file/d/1j_M-3lCrXT50JzBfUPSHWKBZL-YA4T1n/view?usp=drive_link",
  },
  {
    image: "/work/achievements/Proof_of_pre-professional_internship_2023.png",
    category: "experience",
    name: "Web developer",
    description:
      "Web development with HTML, CSS, JS, React, PHP and Firebase.",
    workplace: "Private Educational Institution “Ricardo Palma”",
    time: "From September to December, 2023",
    link: "https://drive.google.com/file/d/1J9shOA3pPFUQzF7pP0xKpR_XG2LiYisa/view?usp=drive_link",
  },
  {
    image: "/work/achievements/PEI_Rosa_Mistica_Certificate_2023.png",
    category: "experience",
    name: "Computer Teacher",
    description: "Teaching of office programs, hardware, software, design tools and basic networking.",
    workplace: "Private Educational Institution “Rosa Mistica”",
    time: "From May 2022 to December, 2023",
    link: "https://drive.google.com/file/d/1kAb4zULO7F4665WtURFPQrW4cm4WNXLI/view?usp=drive_link",
  },
  {
    image: "/work/achievements/Certificate_of_English_Practice_2021.png",
    category: "experience",
    name: "English instructor",
    description:
      "Remote English classes; responsible for various grades and sections at the secondary level.",
    workplace:
      'Commitment of Service to Peru (EI) 14787 "Victor Raul Haya de la Torre"',
    time: "From March to December, 2021",
    link: "https://drive.google.com/file/d/13gtv7Mj6Ni9AxyuMfRUsUxJ8yj9Sv910/view?usp=drive_link",
  },

  {
    image: "/work/achievements/Merit_Diploma.png",
    category: "achievements",
    name: "Merit Diploma",
    description:
      "Diploma of Honor for Merit for achieving the fifth position throughout the 5 years of Secondary Education.",
    link: "https://drive.google.com/file/d/1lr2RkZuCQCMWePsSdJjbs8krNJoThf53/view?usp=drive_link",
  },
  {
    image: "/work/achievements/Expowork_Sales_System_Certificate_2020.png",
    category: "achievements",
    name: "UCV National Expowork",
    description:
      'First place obtained in Category 2 at the National Expowork with the project "Sales and Commercial Support System MemoriesBack.',
    link: "https://drive.google.com/file/d/1S3OOJdHblm7s9eFH9_RvtU0mtrSnNQnL/view?usp=drive_link",
  },
  {
    image:
      "/work/achievements/International_Expo_Work_3D_Modeling_Certificate_2022.png",
    category: "achievements",
    name: "UCV International Expowork",
    description:
      'Third place obtained in Category 3 at the International Expowork with the project "Modeling of the Main Building of Cesar Vallejo University, Piura Campus, and its surroundings using Cinema 4D software."',
    link: "https://drive.google.com/file/d/1hEV5W9QO0QjeIecmAqfNl-WAc1HODg_b/view?usp=drive_link",
  },
  {
    image: "/work/achievements/Fair_3D_Modeling_Certificate_2022.png",
    category: "achievements",
    name: "UCV Innovation Fair",
    description:
      'First place obtained in the Innovation Category at the Innovation and Entrepreneurship Fair with the project "Modeling Project of the Central Building of Cesar Vallejo University - Piura Campus."',
    link: "https://drive.google.com/file/d/1b4F2QKDUcQOQ0hGQuUIoy_f3vv0D5bDJ/view?usp=drive_link",
  },
  {
    image: "/work/achievements/Fair_Mobile_App Certificate_2022.png",
    category: "achievements",
    name: "UCV Entrepreneurship Fair",
    description:
      'First place obtained in the Entrepreneurship Category at the Innovation and Entrepreneurship Fair with the project "Mobile Application for Operational Project Control; Inserge Piura"',
    link: "https://drive.google.com/file/d/1sRqTDVm8kmEPlZY19KWV3Iymc9lXUkDv/view?usp=drive_link",
  },
  {
    image:
      "/work/achievements/International_Smart_Irrigation_System_Certificate_2023.png",
    category: "achievements",
    name: "UCV International Expowork",
    description:
      'First place obtained in Category 4 at the International Expowork with the project "Smart Irrigation System with ESP32 and Bluetooth Control."',
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
              className="xl:h-[530px] lg:h-[560px] md:h-[590px] sm:h-[620px]"
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
