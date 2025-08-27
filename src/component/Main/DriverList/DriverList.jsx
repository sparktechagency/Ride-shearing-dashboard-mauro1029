import { Button, Table } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMdEye } from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const DriverList = () => {
  const [, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  // Sample Data for the Driver List
  const driverList = [
    {
      key: 1,
      name: "Bashar",
      email: "supportinfo@gmail.com",
      time: "11 Oct 24, 11:10PM",
    },
    {
      key: 2,
      name: "Bashar",
      email: "supportinfo@gmail.com",
      time: "11 Oct 24, 11:10PM",
    },
    {
      key: 3,
      name: "Bashar",
      email: "supportinfo@gmail.com",
      time: "11 Oct 24, 11:10PM",
    },
    {
      key: 4,
      name: "Bashar",
      email: "supportinfo@gmail.com",
      time: "11 Oct 24, 11:10PM",
    },
    {
      key: 5,
      name: "Bashar",
      email: "supportinfo@gmail.com",
      time: "11 Oct 24, 11:10PM",
    },
    {
      key: 6,
      name: "Bashar",
      email: "supportinfo@gmail.com",
      time: "11 Oct 24, 11:10PM",
    },
    {
      key: 7,
      name: "Bashar",
      email: "supportinfo@gmail.com",
      time: "11 Oct 24, 11:10PM",
    },
    {
      key: 8,
      name: "Bashar",
      email: "supportinfo@gmail.com",
      time: "11 Oct 24, 11:10PM",
    },
    {
      key: 9,
      name: "Bashar",
      email: "supportinfo@gmail.com",
      time: "11 Oct 24, 11:10PM",
    },
    {
      key: 10,
      name: "Bashar",
      email: "supportinfo@gmail.com",
      time: "11 Oct 24, 11:10PM",
    },
  ];

  // Driver Details Modal Content
  const handleViewDetails = () => {
    setIsModalOpen(true);
  };
  const columns = [
    {
      title: t("#SL"),
      dataIndex: "key",
      key: "key",
      render: (text) => `0${text}`,
    },
    {
      title: t("User Name"),
      dataIndex: "name",
      key: "name",
    },
    {
      title: t("Email"),
      dataIndex: "email",
      key: "email",
    },
    {
      title: t("Time & Date"),
      dataIndex: "time",
      key: "time",
    },
    {
      title: t("Actions"),
      key: "actions",
      render: (_, record) => (
        <Link to="/driverlist-details">
          <Button
            icon={<IoMdEye size={20} />}
            onClick={() => handleViewDetails(record)}
            className="bg-blue-500 text-white rounded-md"
          >
            {t("View")}
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Top section with buttons */}
      <div className="flex justify-between p-6">
        <div className="flex  items-center my-6">
          <Link to="/driver">
            <IoChevronBack className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-semibold">{t("Driver List")}</h1>
        </div>

        <Button className="bg-blue-500 text-white rounded-md">
          {t("Block List")}
        </Button>
      </div>

      {/* Driver List Table */}
      <Table
        columns={columns}
        dataSource={driverList}
        pagination={false}
        rowKey="key"
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default DriverList;
