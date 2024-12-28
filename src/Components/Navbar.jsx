import React from "react";

function Navbar() {
  return (
    <>
      <div data-aos="fade-down" data-aos-duration='3000' className="container nav_bar flex justify-between p-4 font-bold">
        <div  className="left text-2xl  hover:border-b-2 hover:border-yellow-400">Portfolio</div>
        <div className="right flex justify-between gap-6">
          <a href="#home" className="nav_items text-xl hover:border-b-2 hover:border-yellow-400">Home</a>
          <a href="#Experience" className="nav_items text-xl hover:border-b-2 hover:border-yellow-400">Experience</a>
          <a href="#skills" className="nav_items text-xl hover:border-b-2 hover:border-yellow-400">Skills</a>
          <a href="#projects" className="nav_items text-xl hover:border-b-2 hover:border-yellow-400">Projects</a>
          <a href="#contact" className="nav_items text-xl hover:border-b-2 hover:border-yellow-400">Contact Us</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
