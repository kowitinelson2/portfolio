import React from "react";
import auction from "../assets/auction_png.jpeg";
import insurance from "../assets/insurance.jpeg";
import manage from "../assets/manage.PNG";

const Projects = () => {
  const projects = [
    {
      img: manage,
      title: "Manage-Project",
      desc: " A simple landing page. Built with HTML and Tailwind CSS ",
      live: "https://musical-gecko-c007f0.netlify.app/",
      code: "https://github.com/kowitinelson2/Tailwind-Manage-project",
    },
    {
      img: insurance,
      title: "Insurance_Smart_Contract",
      desc: "An insurance smart contract. Built with Nextjs, Solidity, Tailwind CSS and JavaScript",
      live: "https://muddy-sea-8796.on.fleek.co/",
      code: "https://github.com/kowitinelson2/front-end-nextjs-insurance-smart-contract",
    },
    {
      img: auction,
      title: "Auction System App",
      desc: "An auctioning android app, Built with java and implemented M-pesa payment",
      live: "https://appetize.io/app/xvddrpg3hzqw6rwpptzoepbjai?device=pixel4&osVersion=11.0&scale=75",
      code: "https://github.com/Coderamrin/build-10-css-projects",
    },
    // {
    //   img: getInspirred,
    //   title: "get Inspirred",
    //   desc: "Quote search app. Used Quotable API for the quotes and React, Redux on the frontend",
    //   live: "https://get-inspirred.netlify.app/",
    //   code: "https://github.com/Coderamrin/get-inspired",
    // },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            Nextjs, Java, JavaScript and TailwindCSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
