/* eslint-disable react/prop-types */

import { FiMenu } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { imageBaseUrl } from "../../../config/imageBaseUrl";
import { useTranslation } from "react-i18next";
import { RiNotificationFill } from "react-icons/ri";

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  // const { user } = useSelector((state) => state.auth);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="w-full px-5 py-3.5 bg-[#00AFF5] flex justify-between items-center  sticky top-0 left-0 z-10">
      <div className="flex items-center gap-3">
        {/* Hamburger menu for mobile */}
        <button className="md:hidden text-3xl" onClick={toggleSidebar}>
          <FiMenu />
        </button>
      </div>

      <div className="flex justify-between items-center gap-8">
        <div className="flex space-x-2">
     
          <h1 className="text-[24px] font-bold text-[#161D6F]">
            {t("Language Switcher")}
          </h1>
        </div>
        <div>
          <select
            className=" py-2 rounded-md"
            onClick={(e) => changeLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="sp">Spanish</option>
          </select>
        </div>
        <Link to={"/notification"}>
          <h1 className="relative  p-2 rounded-full bg-white">
            <RiNotificationFill className="size-8" />{" "}
          </h1>
        </Link>
        <img
          onClick={() => navigate("/personal-info")}
          // src={`${imageBaseUrl}${user?.image?.url}`}
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="size-12 rounded-full cursor-pointer border border-gray-500"
        />
        <div className="hidden md:block">
          <h1 className="">{t("Fletch Skinner")}</h1>
          <span className="">{t("Admin")}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
