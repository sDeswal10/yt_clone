import React, { useContext } from "react";
import { categories } from "../Utils/Constants";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { Context } from "../Context/ContextApi";
import { Link, useNavigate } from "react-router-dom";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"


const LeftNav = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu } =
    useContext(Context);
  const navigate = useNavigate();
  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };
  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 md:translate-x-0 transition-all ${mobileMenu ?'translate-x-0' : 'translate-x-[-240px]'}`}
    >
      <div className="flex flex-col px-5">
        {categories?.map((item, index) => {
          return (
            <>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item?.name, item?.type);
                  navigate("/");
                }}
                className={`${
                  selectedCategory === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px] flex flex-col">
          Clone By: Sachin Deswal
          <span className="flex items-center justify-center text-xl mt-3">
            <Link to="https://github.com/sDeswal10">
              <FaGithub  className="mx-2"/>
            </Link>
            <Link to="https://www.instagram.com/">
              <FaInstagram className="mx-2"/>
            </Link>
            <Link to="https://www.linkedin.com/in/sachindeswal10">
              <FaLinkedin className="mx-2"/>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
