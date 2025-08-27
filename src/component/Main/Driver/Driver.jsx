import { ConfigProvider, DatePicker, Form, Input, Table } from "antd";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { useGetAllUsersQuery } from "../../../redux/features/user/userApi";
const { Item } = Form;

const Driver = () => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isFetching, isError, error } = useGetAllUsersQuery();
  const { t } = useTranslation();

  const columns = [
    {
      title: t("#SL"),
      dataIndex: "si",
      key: "si",
    },
    {
      title: t("Driver Name"),
      dataIndex: "driverName",
      key: "driverName",
      render: (text) => text || "N/A",
    },
    {
      title: t("Email"),
      dataIndex: "email",
      key: "email",
      render: (text) => text || "N/A",
    },
    {
      title: t("Time & Date"),
      dataIndex: "time",
      key: "time",
      render: (text) => text || "N/A",
    },
    {
      title: t("Actions"),
      key: "actions",
      render: () => {
        return (
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              {t("Accept")}
            </button>
            <Link to="/driver-details">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                {t("View")}
              </button>
            </Link>
          </div>
        );
      },
    },
  ];

  const dataSource = [
    {
      key: "1",
      si: "01",
      driverName: "Bashar",
      email: "b.support@gmail.com",
      time: "10 Oct 24, 10:00 PM",
    },
    {
      key: "2",
      si: "02",
      driverName: "Bashar",
      email: "b.support@gmail.com",
      time: "10 Oct 24, 10:00 PM",
    },
    {
      key: "3",
      si: "03",
      driverName: "Bashar",
      email: "b.support@gmail.com",
      time: "10 Oct 24, 10:00 PM",
    },
    {
      key: "4",
      si: "04",
      driverName: "Bashar",
      email: "b.support@gmail.com",
      time: "10 Oct 24, 10:00 PM",
    },
    {
      key: "5",
      si: "05",
      driverName: "Bashar",
      email: "b.support@gmail.com",
      time: "10 Oct 24, 10:00 PM",
    },
  ];

  useEffect(() => {
    if (isError && error) {
      console.error(error);
    } else if (data) {
      // Handle data if necessary
    }
  }, [data, isError, error]);

  return (
    <section>
      <div className="md:flex justify-between items-center py-6 mb-4">
        <h1 className="text-2xl font-semibold">{t("Driver List")}</h1>
        <Form layout="inline" className="flex space-x-4">
          <Link to="/driver-list">
            {" "}
            <div className="bg-[#00AFF5] p-2 rounded-md">
              {t("Driver List")}
            </div>
          </Link>
          <Item name="date">
            <DatePicker
              className="rounded-md border border-[#00AFF5]"
              // onChange={(date) => setSelectedDate(date)}
              placeholder="Donation Date"
            />
          </Item>
          <Item name="searchText">
            <Input
              className="rounded-md w-[70%] md:w-full border border-[#00AFF5]"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Item>
          <Item>
            <button className="size-8 rounded-full flex justify-center items-center bg-[#00AFF5] text-white">
              <IoIosSearch className="size-5" />
            </button>
          </Item>
        </Form>
      </div>

      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "#00AFF5",
              headerColor: "#000",
              headerBorderRadius: 5,
            },
          },
        }}
      >
        <Table
          loading={isFetching}
          pagination={{
            pageSize: 5,
            current: currentPage,
            onChange: setCurrentPage,
          }}
          columns={columns}
          dataSource={dataSource}
          rowKey="key"
        />
      </ConfigProvider>
    </section>
  );
};

export default Driver;
