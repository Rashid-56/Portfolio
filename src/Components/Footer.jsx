import React from "react";
import { Facebook, Linkedin, Github, Phone,MailOpen ,MapPin} from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="container my-10 px-4 ">
        <div className="flex justify-between md:flex-row flex-col gap-y-7 items-center mt-9 text-gray-400">
          <div>
            <p>Copyright &copy; 2024. Reserved</p>
          </div>
          <div>
            <ul className="flex gap-4  ">
              <li>
                <a
                  className="style-none hover:font-bold hover:text-cyan-500 text-white cursor-pointer"
                  href="https://www.facebook.com/mirza.rashid.73345"
                >
                  <Facebook />
                </a>
              </li>
              <li>
                <a
                  className="style-none hover:font-bold hover:text-cyan-500 text-white cursor-pointer"
                  href="https://www.linkedin.com/in/mirza-rashid-381050291/"
                >
                  <Linkedin />
                </a>
              </li>
              <li>
                <a
                  className="style-none hover:font-bold hover:text-cyan-500 text-white cursor-pointer"
                  href="https://github.com/Rashid-56"
                >
                  <Github />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex md:flex-row flex-col  md:gap-10 gap-1">
          <div className="md:mt-10 mt-5 text-gray-400 flex md:justify-start justify-center">
            <div className="flex gap-3">
              <span>
                <Phone />
              </span>
              <span>0306-4813525</span>
            </div>
          </div>
          <div className="md:mt-10 mt-5 text-gray-400 flex md:justify-start justify-center">
            <div className="flex gap-3">
              <span>
              <MailOpen />
              </span>
              <span>mirzarashid608@gmail.com</span>
            </div>
          </div>
          <div className="md:mt-10 mt-5 text-gray-400 flex md:justify-start justify-center">
            <div className="flex gap-3">
              <span>
              <MapPin />
              </span>
              <span>Kasur,City.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
