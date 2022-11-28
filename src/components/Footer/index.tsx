import React from "react";

import phoneIcon from "@assets/icon/phone.png";
import githubIcon from "@assets/icon/github.png";
import instagramIcon from "@assets/icon/instagram.png";

import "./style.scss";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="wrapper">
        <img src={phoneIcon} alt="phon icon" />
        <div>+7 (903) 307 01 05</div>
      </div>
      <div className="wrapper">
        <img src={instagramIcon} alt="instagram icon" />
        <a href="https://www.instagram.com/invites/contact/?i=1rbnoz2is6vq7&utm_content=35ouq1">
          @slavakechup
        </a>
      </div>
      <div className="wrapper">
        <img src={githubIcon} alt="instagram icon" />
        <a href="https://github.com/VKechkin">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
