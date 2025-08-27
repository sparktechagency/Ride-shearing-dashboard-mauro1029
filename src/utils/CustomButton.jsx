/* eslint-disable react/prop-types */
import { Button } from "antd";

const CustomButton = ({
  loading = false,
  children,
  className,
}) => {
  return (
      <div
        className={`${className}  p-0.5 rounded-lg inline-block`}
      >
        <Button
          type="default"
          htmlType="submit"
          loading={loading}
          className="w-full bg-[#00AFF5] px-5 py-2 flex justify-center items-center gap-5  rounded-lg border-none"
          size="large"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "#00AFF5",
            color: "#000000", // Ensure text color stays white
          }}
          // Custom hover style to maintain background and text color
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#00AFF5"; // Maintain the same background color on hover
            e.target.style.color = "#000000"; // Maintain white text color on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#00AFF5"; // Maintain the same background color when hover ends
            e.target.style.color = "#000000"; // Maintain white text color when hover ends
          }}
        >
          {children}
        </Button>
      </div>
  );
};

export default CustomButton;
