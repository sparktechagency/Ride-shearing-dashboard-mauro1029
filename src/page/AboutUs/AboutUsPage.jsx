import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import CustomButton from "../../utils/CustomButton";
import { useTranslation } from "react-i18next";
// import { useGetAboutUsQuery } from "../../redux/features/setting/settingApi";
 // Importing Spin

const AboutUsPage = () => {
 const { t } = useTranslation();
  return (
    <section className="w-full h-full min-h-screen">
      <div className="flex justify-between items-center py-5">
        <div className="flex  items-center">
          <Link to="/settings">
            <IoChevronBack className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-semibold">{t("About Us")}</h1>
        </div>
        <Link to={"/settings/edit-about-us/11"}>
          <CustomButton border>
            <TbEdit className="size-5" />
            <span>{t("Edit")}</span>
          </CustomButton>
        </Link>
      </div>

      {/* Show Spin loader if data is loading */}


      <div>
        <p className="text-lg px-5 text-black">
          {/* {about.content} */}
          {t("This is the about us content. It provides information about our company, our mission, and our values.")}
        </p>
      </div>
    </section>
  );
};

export default AboutUsPage;
