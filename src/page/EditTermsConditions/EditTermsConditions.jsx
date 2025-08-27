import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Button, Form } from "antd";
import ReactQuill from "react-quill"; // Import React Quill
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { useState } from "react";
import CustomButton from "../../utils/CustomButton";
import { useTranslation } from "react-i18next";

const EditTermsConditions = () => {
  const [form] = Form.useForm();
  const [content, setContent] = useState(
    "<h1>Enter your 'Terms and Conditions' content here.</h1>"
  ); // Default content for the Terms and Conditions section
  const { t }= useTranslation();
  const handleSubmit = () => {
    console.log("Updated Terms and Conditions Content:", content);
    // Handle form submission, e.g., update the Terms and Conditions in the backend
  };

  return (
    <section className="w-full h-full min-h-screen ">
      {/* Header Section */}
      <div className="flex justify-between items-center py-5">
        <div className="flex items-center">
          <Link to="/settings/terms-conditions">
            <IoChevronBack className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-semibold">{t("Edit Terms and Conditions")}</h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full p-6 rounded-lg shadow-md">
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          {/* React Quill for Terms and Conditions Content */}
          <Form.Item name="content" initialValue={content}>
            <ReactQuill
              value={content}
              onChange={(value) => setContent(value)}
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, 4, 5, 6, false] }], // Header dropdown
                  [{ font: [] }], // Font options
                  [{ list: "ordered" }, { list: "bullet" }], // Ordered and bullet lists
                  ["bold", "italic", "underline", "strike"], // Formatting options
                  [{ align: [] }], // Text alignment
                  [{ color: [] }, { background: [] }], // Color and background
                  ["blockquote", "code-block"], // Blockquote and code block
                  ["link", "image", "video"], // Link, image, and video upload
                  [{ script: "sub" }, { script: "super" }], // Subscript and superscript
                  [{ indent: "-1" }, { indent: "+1" }], // Indent
                  ["clean"], // Remove formatting
                ],
              }}
              style={{ height: "300px" }} // Set the increased height
            />
          </Form.Item>

           {/* Update Button */}
         <div className="w-full flex justify-end mt-20 md:mt-16">
         <Button
          type="primary"
          htmlType="submit"
          icon={<i className="fas fa-sync-alt"></i>} // Example FontAwesome icon
          className="mt-1 px-5 rounded-lg bg-gray-500 py-5  border-none"
        >
          {t("Cancel")}
        </Button>
         <CustomButton className="p-1" >{t("Update")}</CustomButton>
         </div>
        </Form>
      </div>
    </section>
  );
};

export default EditTermsConditions;
