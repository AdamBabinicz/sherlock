import React, { useState } from "react";
import { projects } from "../data/projects";
import { GiQuillInk } from "react-icons/gi";
import { BsLink } from "react-icons/bs";

const Projects = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useState(projects);

  return (
    <>
      <section className="projects">
        <h1>Ilustracje</h1>
        <div className="cards">
          {cards.map(({ id, title, desc, github, demo, image }) => (
            <article key={id}>
              <img src={image} alt={title} />
              <h4>{title}</h4>
              <p>{desc}</p>
              <ul>
                <li>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github"
                  >
                    <BsLink style={{ marginRight: "5" }} />
                    Link
                  </a>
                </li>
                <li>
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo"
                  >
                    <GiQuillInk style={{ marginRight: "5" }} />
                    Link
                  </a>
                </li>
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
