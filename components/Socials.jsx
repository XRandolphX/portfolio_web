"use-client";

import {
  // RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://github.com/XRandolphX",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.linkedin.com/in/randolph-fabrizio-ramirez-palacios-4766a1272",
    name: <RiLinkedinFill />,
  },
  // {
  //   path: "https://www.instagram.com/randolph.ramirezpalacios",
  //   name: <RiInstagramFill />,
  // },
  // {
  //   path: "/",
  //   name: <RiYoutubeFill />,
  // },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link
            href={icon.path}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
