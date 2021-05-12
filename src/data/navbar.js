import { v4 as uuid4 } from "uuid";

export const navbar = [
  {
    id: uuid4(),
    title: "Start",
    url: "/",
  },
  {
    id: uuid4(),
    title: "Ilustracje",
    url: "/projects",
  },
  {
    id: uuid4(),
    title: "Kontakt",
    url: "/contact-me",
  },
];
