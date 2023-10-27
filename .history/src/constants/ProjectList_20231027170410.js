import ecommerce from "../assets/projects/ecommerce.png";
import discord from "../assets/projects/discord.png";
import medconnect from "../assets/projects/medconnect.png";
import keeper from "../assets/projects/keeper.png";
import authorisation from "../assets/projects/authorisation.png";
import CowboyNestJS from "../assets/projects/CowboyNestJS.png";
import CowboyNodeJS from "../assets/projects/CowboyNodeJS.png";
import OldCar from "../assets/projects/OldCar.png";

export const ProjectList = [
  {
    id: 1,
    name: "Cowboy Action Shooting - Nest.JS",
    description:
      "Cowboy Action Shooting is a web application meticulously designed using CSS and Tailwind to serve everyone's passion for shooting. It includes buying guns, learning about guns, choosing guns, and evaluating the quality of the product. The app boasts of being fully responsive, ensuring a seamless experience.",
    img: CowboyNestJS,
    //max 6 tech stack
    tech: [
      "ReactJS",
      "Typescript",
      "Redux",
      "Redux-toolkit",
      "NestJS",
      "MySQL",
      "Paypal",
    ],
    source: "https://github.com/Khoatran050495/project_4",
  },
  {
    id: 2,
    name: "Cowboy Action Shooting - Node.JS",
    description:
      "Cowboy Action Shooting is a web application meticulously designed using CSS and Tailwind to serve everyone's passion for shooting. It includes buying guns, learning about guns, choosing guns, and evaluating the quality of the product. The app boasts of being fully responsive, ensuring a seamless experience.",
    img: CowboyNodeJS,
    //max 6 tech stack
    tech: ["React", "Node.js", "Express.js", "MySQL", "Paypal"],
    source: "https://github.com/Khoatran050495/project_3",
  },
  {
    id: 3,
    name: "Old Car",
    description:
      "The Old Car website is a channel for the company to advertise its products to customers and the website helps customers choose a car, buy a car, and refer to the company's vehicles.",
    img: OldCar,
    //max 6 tech stack
    tech: ["Javascript", "CSS", "Bootstrap"],
    source: "https://github.com/Khoatran050495/project_2",
    demo: null,
  },
];
