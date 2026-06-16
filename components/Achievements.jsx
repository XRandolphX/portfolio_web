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
import { achievementsData } from "@/data/achievements";

const uniqueCategories = [
  ...new Set(achievementsData.map((item) => item.category)),
];

const Achievements = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState(categories[0]);

  const filteredProjects = achievementsData.filter((project) => {
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
