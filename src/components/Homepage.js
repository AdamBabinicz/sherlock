import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Homepage = () => {
  return (
    <>
      <section className="homepage">
        <div className="overlay">
          <h1>Sherlock Holmes</h1>
          <p>
            postać fikcyjna, bohater powieści i opowiadań <br /> kryminalnych
            sir Arthura Conana Doyle’a.
          </p>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/SherlockHolmesMovie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/ContactSH"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Homepage;
