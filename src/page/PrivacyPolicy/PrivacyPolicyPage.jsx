import { IoChevronBack } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import CustomButton from "../../utils/CustomButton";
import { useTranslation } from "react-i18next";

const PrivacyPolicyPage = () => {
  const {t} = useTranslation();
  return (
    <section className="w-full h-full min-h-screen">
      <div className="flex justify-between items-center py-5">
        <div className="flex  items-center">
          <Link to="/settings">
            <IoChevronBack className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-semibold">{t("Privacy Policy")}</h1>
        </div>
        <Link to={"/settings/edit-privacy-policy/11"}>
          <CustomButton border>
            <TbEdit className="size-5" />
            <span>{t("Edit")}</span>
          </CustomButton>
        </Link>
      </div>

      <div>
        <p className="text-lg text-black px-5">
          {/* {privacy.content} */}
          {t("This is the privacy policy content. It outlines how we handle user data, what information we collect, and how we use it.")}
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
