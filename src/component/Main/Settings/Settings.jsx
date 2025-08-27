import { Form, Modal, Switch } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../utils/CustomButton";
import CustomInput from "../../../utils/CustomInput";

const Settings = () => {
  const { t, i18n } = useTranslation(); // Added i18n for language change
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelTitle, setModelTitle] = useState("");
  const [form] = Form.useForm();

  const settingsItem = [
    {
      title: t("Personal Information"),
      path: "personal-info",
    },
    {
      title: t("Change password"),
      path: "change-password",
    },
    {
      title: t("Privacy Policy"),
      path: "privacy-policy",
    },
    {
      title: t("Terms & Conditions"),
      path: "terms-conditions",
    },
    {
      title: t("About us"),
      path: "about-us",
    },
  ];

  const handleNavigate = (value) => {
    if (value === "notification") {
      return;
    } else if (value === "change-password") {
      setModelTitle(t("Change password"));
      setIsModalOpen(true);
    } else {
      navigate(`/settings/${value}`);
    }
  };

  // Function to change language dynamically
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Changes the language to Spanish or any other
  };

  const handleChangePassword = async (values) => {
    return console.log(values);
  };

  return (
    <section className="w-full py-6">
      {/* Language switch (you can trigger this from a dropdown or button elsewhere in your UI) */}
      {/* <button onClick={() => handleChangeLanguage("es")}>Español</button> */}

      {settingsItem.map((setting, index) => (
        <div
          key={index}
          className="w-full p-4 mb-2 text-sm rounded-lg bg-[#00b0f5ad] flex items-center justify-between cursor-pointer "
          onClick={() => handleNavigate(setting.path)}
        >
          <h2 className="text-xl">{setting.title}</h2>
          <h2>
            {setting.path === "notification" ? (
              <Switch defaultChecked onChange={() => {}} />
            ) : (
              <MdKeyboardArrowRight size={40} />
            )}
          </h2>
        </div>
      ))}

      <Modal
        title={
          <div
            onClick={() => setIsModalOpen(false)}
            className="flex bg-primary items-center cursor-pointer text-black"
          >
            <h1 className="text-xl font-medium mb-5">{modelTitle}</h1>
          </div>
        }
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
        centered
      >
        {modelTitle === t("Change password") && (
          <div className="w-full px-5 ">
            <p className="text-[14px] mb-[14px]">
              {t("Your password must be 8-10 character long.")}
            </p>
            <Form
              form={form}
              name="dependencies"
              autoComplete="off"
              style={{
                maxWidth: 600,
              }}
              layout="vertical"
              className="space-y-4 fit-content object-contain"
              onFinish={handleChangePassword}
            >
              <Form.Item
                name="oldPassword"
                rules={[
                  {
                    required: true,
                    message: t("Please Input Your Old Password!"),
                  },
                ]}
              >
                <CustomInput
                  placeholder={t("Enter Your old Password")}
                  isPassword
                />
              </Form.Item>

              <Form.Item
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: t("Please Input Your New Password!"),
                  },
                ]}
              >
                <CustomInput
                  placeholder={t("Set Your New Password")}
                  isPassword
                />
              </Form.Item>

              <Form.Item
                name="reenterPassword"
                dependencies={["newPassword"]}
                rules={[
                  {
                    required: true,
                    message: t("Please Input Your Re-enter Password!"),
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          t("The new password that you entered do not match!")
                        )
                      );
                    },
                  }),
                ]}
              >
                <CustomInput placeholder={t("Re-enter password")} isPassword />
              </Form.Item>

              <Form.Item className="w-full">
                <CustomButton className="w-full">
                  {t("Update Password")}
                </CustomButton>
              </Form.Item>
            </Form>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Settings;
