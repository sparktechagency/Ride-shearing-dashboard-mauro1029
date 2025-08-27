
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import CustomButton from "../../utils/CustomButton";
import { useTranslation } from "react-i18next";



const TermsconditionPage = () => {

  const { t } = useTranslation();
  return (
    <section className="w-full h-full min-h-screen">
      <div className="flex justify-between items-center py-5">
        <div className="flex  items-center">
          <Link to="/settings">
            <IoChevronBack className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-semibold">{t("Terms of Conditions")}</h1>
        </div>
        <Link to={"/settings/edit-terms-conditions/11"}>
          <CustomButton border>
            <TbEdit className="size-5" />
            <span>{t("Edit")}</span>
          </CustomButton>
        </Link>
      </div>

      <div className="text-lg text-black px-5">
        {/* {term.content} */}
        {t("These terms and conditions outline the rules and regulations for the use of our service. By accessing this service, you agree to comply with these terms. If you do not agree with any part of these terms, you must not use our service.")}
      </div>
    </section>
  );
};

export default TermsconditionPage;
