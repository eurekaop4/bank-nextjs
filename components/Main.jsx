import React from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaUser } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build something together.
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Theeranai</span>{" "}
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            accusamus, fugit ab iusto officia distinctio unde ut tenetur
            expedita assumenda inventore harum qui ipsa cumque, rem sunt ullam
            autem hic enim cum earum a eligendi at. Alias odio quaerat quas
            blanditiis, accusantium amet obcaecati sed laborum perspiciatis esse
            odit ipsam.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 text-[#5651e5]">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150">
              <FaEnvelope />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150">
              <FaUser />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
