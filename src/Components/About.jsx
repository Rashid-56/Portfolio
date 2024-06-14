import React from "react";

const About = () => {
  return (
    <div className="mt-40 relative z-0">
      <div className="container relative z-0 px-4 my-20 mx-4">
        <div>
          <h1  className="font-bold text-3xl bg-gradient-to-t from-blue-200 to-cyan-700 text-transparent bg-clip-text ">
            About Me
          </h1>
          <div className="mt-10 text-gray-300"><h1>I am a web developer focused on creating and user-friendly websites. I use HTML,CSS,and JavaScript to design and build websites that work well on defferent devices . I am also familiar with front-end frameworks like React js to add interactive elements to websites . My goal is to make sure websites not only look great but also provide a smooth adn enjoyable experience for users.</h1></div>

          <div className="flex gap-3  flex-wrap mt-4 relative  before:absolute before:top-10 before:left-[100px] before:bottom-0 before:w-1 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-300 ">
            <div className=" ml-20">
              <div className="text-gray-400 ml-20 pt-10">
                <h2 className="absolute left-0 text-center font-semibold text-gray-400 ">2017-2019</h2>
                <p>
                 <ul>
                  <h3 className="text-white font-semibold">Matric </h3>
                  <p>Science</p>
                  <p>Board of Intermediate and Secondary Education</p>
                 </ul>
                </p>
              </div>
              <div className="text-gray-400 ml-20  pt-10">
              <h2 className="absolute left-0 text-center font-semibold text-gray-400">2019-2021</h2>
                <p>
                <ul>
                  <h3 className="text-white font-semibold">Intermediate </h3>
                  <p>Pre-Engineering</p>
                  <p>Government College University, Lahore</p>
                 </ul>
                </p>
              </div>
              <div className="text-gray-400 ml-20 pt-10">
              <h2 className="absolute left-0 text-center font-semibold text-gray-400">2021-2025</h2>
                <p>
                <ul>
                  <h3 className="text-white font-semibold">BS Computer Science </h3>
                  <p>Virtual University of Pakistan</p>
                  
                 </ul>
                </p>
              </div>
           
            <div className="text-gray-400 ml-20 pt-10">
            <h2 className="absolute left-0 text-center font-semibold text-gray-400 ">2023</h2>
              <p>
              <ul>
                  <h3 className="text-white font-semibold">FrontEnd Web-Development </h3>
                  <p>HTML, CSS, JavaScript, Bootstarp, Tailwind CSS, React js, WordPress</p>
                  <p>Arfa kareem Tower , Lahore</p>
                 </ul>
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
