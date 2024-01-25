"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
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
    technologies:
      "Technologies: Html, Css, Bootstrap, Php, JavaScript, CodeIgniter, MySQL, jQuery",
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

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    //if category is 'all projects' return all projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  console.log(filteredProjects);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
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
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
