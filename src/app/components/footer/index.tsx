import Image from "next/image";
import React from "react";

import logo from "/public/gdg-ilorin-logo.svg";
import lanyard from "/public/icon/footer-lanyard.svg";

import twitter from "/public/icon/twitter.svg";
import ig from "/public/icon/ig.svg";
import fb from "/public/icon/fb.svg";
import linkedin from "/public/icon/linkedin.svg";
import Link from "next/link";

const socials = [
  {
    icon: twitter,
    link: "",
  },
  {
    icon: ig,
    link: "",
  },
  {
    icon: fb,
    link: "",
  },
  {
    icon: linkedin,
    link: "",
  },
];

const Footer = () => {
  return (
    <footer className="bg-devfest-footer p-4 flex flex-col items-center justify-center gap-10 py-20">
      <Image src={logo} alt="gdg-ilorin-logo" className="w-[300px]" />
      <Image src={lanyard} alt="lanyard" className="w-[300px]" />
      <div className="flex items-center gap-6">
        {socials.map((social, index) => (
          <Link
            key={index}
            className="bg-white rounded-full hover:bg-[#F9AB00] transition"
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={social.icon} alt={social.link} className="w-[70px]" />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
