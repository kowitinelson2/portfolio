import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hello! I'm Kowiti Nelson, and I'm on an exciting journey through the
            world of computer science. As a passionate student in this
            ever-evolving field, I thrive on unraveling the mysteries of
            algorithms, crafting elegant code, and pushing the boundaries of
            what technology can achieve.
          </p>
          <p className="pb-5">
            I am proficient in skills like React.js, Redux, Nextjs, Solidity,
            PHP, Axios, Css3, HTML, JavaScript
          </p>

          {/* <p>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p>

          <p>
            In my spare time I create YouTube videos and write blogs on my Blog.
            Where I talk about programming theory and build various projects.
          </p> */}
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
