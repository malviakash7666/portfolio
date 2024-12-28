import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <h1 className="text-4xl uppercase">Contact me</h1>
      <div id="contact" className="flex justify-center gap-3"  data-aos="zoom-in-up">
        <a href="https://instagram.com" className=" p-4 text-4xl border-2 shadow shadow-yellow-400 rounded-[100%]  border-yellow-400   hover:bg-blue-950">
          <FaInstagram className=" " />
        </a>

        <a href="https://facebook.com" className=" hover:bg-blue-950 p-4 text-4xl border-2 shadow  shadow-yellow-400 rounded-[100%]  border-yellow-400">
          <FaFacebook />
        </a>

        <a href="https://linkedin.com" className=" hover:bg-blue-950 p-4 text-4xl border-2 shadow shadow-yellow-400 rounded-[100%]  border-yellow-400">
          {" "}
          <FaLinkedin />{" "}
        </a>

        <a href="https://twitter.com" target="_blank" className=" hover:bg-blue-950 p-4 text-4xl border-2  shadow-yellow-400 rounded-[100%]  border-yellow-400">
          <FaXTwitter />
        </a>
        <a href="https://Github.com" className=" hover:bg-blue-950 p-4 text-4xl border-2 shadow shadow-yellow-400 rounded-[100%]  border-yellow-400">
          <FaGithub />
        </a>
        <a href="mailTo:malviakash7666@gmail.com " target="_blank" className=" hover:bg-blue-950 p-4 text-4xl border-2 shadow shadow-yellow-400 rounded-[100%]  border-yellow-400">
          <MdEmail />
        </a>
      </div>
    </div>
  );
};

export default Contact;
