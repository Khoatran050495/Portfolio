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
      "Paypal",
    ],
    source: "https://github.com/trandangkhoa5495/PROJECT_05_USER_GOOGLE",
  },
  {
    id: 2,
    name: "Cowboy Action Shooting",
    description:
      "Cowboy Action Shooting is a web application meticulously designed using CSS and Tailwind to serve everyone's passion for shooting. It includes buying guns, learning about guns, choosing guns, and evaluating the quality of the product. The app boasts of being fully responsive, ensuring a seamless experience.",
    img: CowboyNodeJS,
    //max 6 tech stack
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Stripe",
    ],
    source: "https://github.com/aashish-dhiman/E-Commerce",
    demo: "https://better-overcoat-fly.cyclic.cloud/",
  },
  {
    id: 3,
    name: "Secret Keeper",
    description:
      "The Secret Keeper built with Node.js, Express.js, and Passport.js, provides a user-friendly platform for secure registration, secret sharing, and anonymous content viewing. It incorporates Google OAuth 2.0 for seamless login. With a focus on ease of use, it showcases modern web development in a straightforward manner, offering a safe and engaging online experience.",
    img: authorisation,
    //max 6 tech stack
    tech: ["Node.js", "Express.js", "EJS", "MongoDB", "Passport.js"],
    source: "https://github.com/aashish-dhiman/Authorisation",
    demo: null,
  },
];
