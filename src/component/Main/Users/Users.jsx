/* eslint-disable no-unused-vars */
import { ConfigProvider, DatePicker, Form, Input, Table } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosSearch, IoMdInformationCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { useGetAllUsersQuery } from "../../../redux/features/user/userApi";

const { Item } = Form;

const Users = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalViewOpen, setIsModalViewOpen] = useState(false);
  const [allUser, setAllUser] = useState([]);
  const [user, setUser] = useState(null);
  const { data, isFetching, isError, error } = useGetAllUsersQuery();
  const { t } = useTranslation();

  const handleView = (record) => {
    setUser(record);
    setIsModalViewOpen(true);
  };

  const [allUsers, setAllUsers] = useState([
    {
      id: 1,
      accountID: 2010,
      firstName: "John Smith",
      lastName: "Doe",
      email: "johndoe@example.com",
      address_line1: "123 Main St, Springfield",
      image: { url: "https://randomuser.me/api/portraits/men/1.jpg" },
      phone: "123-456-7890",
      createdAt: "2024-01-01T10:00:00",
      status: "Only Registered",
      block: false,
    },
    {
      id: 2,
      accountID: 2011,
      firstName: "Jane Smith",
      lastName: "Smith",
      email: "janesmith@example.com",
      address_line1: "456 Elm St, Springfield",
      image: { url: "https://randomuser.me/api/portraits/women/2.jpg" },
      phone: "987-654-3210",
      createdAt: "2024-02-01T14:30:00",
      status: "Active",
      block: true,
    },
    {
      id: 3,
      accountID: 2012,
      firstName: "Alice Smith",
      lastName: "Johnson",
      email: "alicejohnson@example.com",
      address_line1: "789 Oak St, Springfield",
      image: { url: "https://randomuser.me/api/portraits/women/3.jpg" },
      phone: "555-123-4567",
      createdAt: "2024-03-15T09:00:00",
      status: "Active",
      block: false,
    },
    {
      id: 4,
      accountID: 2013,
      firstName: "Bob Smith",
      lastName: "Williams",
      email: "bobwilliams@example.com",
      address_line1: "101 Pine St, Springfield",
      image: { url: "https://randomuser.me/api/portraits/men/2.jpg" },
      phone: "555-987-6543",
      createdAt: "2024-04-10T16:45:00",
      status: "Only Registered",
      block: true,
    },
    {
      id: 5,
      accountID: 2014,
      firstName: "Charlie Smith",
      lastName: "Brown",
      email: "charliebrown@example.com",
      address_line1: "202 Maple St, Springfield",
      image: { url: "https://randomuser.me/api/portraits/men/3.jpg" },
      phone: "555-654-3210",
      createdAt: "2024-05-05T12:00:00",
      status: "Active",
      block: false,
    },
    {
      id: 6,
      accountID: 2014,
      firstName: "Charlie Smith",
      lastName: "Brown",
      email: "charliebrown@example.com",
      address_line1: "202 Maple St, Springfield",
      image: { url: "https://randomuser.me/api/portraits/men/3.jpg" },
      phone: "555-654-3210",
      createdAt: "2024-05-05T12:00:00",
      status: "Active",
      block: false,
    },
    {
      id: 7,
      accountID: 2014,
      firstName: "Charlie Smith",
      lastName: "Brown",
      email: "charliebrown@example.com",
      address_line1: "202 Maple St, Springfield",
      image: { url: "https://randomuser.me/api/portraits/men/3.jpg" },
      phone: "555-654-3210",
      createdAt: "2024-05-05T12:00:00",
      status: "Active",
      block: false,
    },
    {
      id: 8,
      accountID: 2014,
      firstName: "Charlie Smith",
      lastName: "Brown",
      email: "charliebrown@example.com",
      address_line1: "202 Maple St, Springfield",
      image: { url: "https://randomuser.me/api/portraits/men/3.jpg" },
      phone: "555-654-3210",
      createdAt: "2024-05-05T12:00:00",
      status: "Active",
      block: false,
    },
  ]);

  const dataSource = allUsers.map((user, index) => ({
    id: user.id,
    si: index + 1,
    firstName: user?.firstName,
    lastName: user?.lastName,
    accountID: user?.accountID,
    email: user?.email,
    phone: user?.phone,
    address_line1: user?.address_line1,
    createdAt: user?.createdAt,
    imageUrl: user?.image?.url,
    status: user?.status,
    block: user?.block,
  }));

  const columns = [
    {
      title: t("#SI"),
      dataIndex: "si",
      key: "si",
      sorter: (a, b) => a.si - b.si,
    },
    {
      title: t("User Name"),
      dataIndex: "firstName",
      key: "firstName",
      sorter: (a, b) => a.firstName?.localeCompare(b.firstName),
      render: (text) => text || "N/A",
    },
    {
      title: t("Email"),
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email?.localeCompare(b.email),
      render: (text) => text || "N/A",
    },
    {
      title: t("Phone Number"),
      dataIndex: "phone",
      key: "phone",
      sorter: (a, b) => a.phone?.localeCompare(b.phone),
      render: (text) => text || "N/A",
    },
    {
      title: t("Joined Date"),
      dataIndex: "createdAt",
      key: "createdAt",
      sorter: (a, b) => moment(a.createdAt).unix() - moment(b.createdAt).unix(),
      render: (date) => (date ? moment(date).format("DD MMM YYYY") : "N/A"),
    },
    {
      title: t("Action"),
      key: "action",
      render: (_, record) => {
        return (
          <div className="flex items-center space-x-4">
            <Link to="/users-details">
              {" "}
              <IoMdInformationCircleOutline
                size={22}
                onClick={() => handleView(record)} // Trigger modal open
              />
            </Link>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    if (isError && error) {
      setAllUser([]);
    } else if (data) {
      setAllUser(data?.data?.attributes?.user?.results);
    }
  }, [data, isError, error]);

  return (
    <section>
      <div className="md:flex justify-between items-center py-6 mb-4">
        <h1 className="text-2xl flex items-center font-semibold">
          {t("All Users")}
        </h1>
        <Form layout="inline" className="flex space-x-4">
          <Item name="date">
            <DatePicker
              className="rounded-md border border-[#00AFF5]"
              onChange={(date) => setSelectedDate(date)}
              placeholder={t("Select Date")}
            />
          </Item>
          <Item name="username">
            <Input
              className="rounded-md w-[70%] md:w-full border border-[#00AFF5]"
              placeholder={t("User Name")}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Item>
          <Item>
            <button className="size-8 rounded-full flex justify-center items-center bg-[#00AFF5] ">
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
            pageSize: 25,
            position: ["bottomCenter"],
            current: currentPage,
            onChange: setCurrentPage,
          }}
          scroll={{ x: "max-content" }}
          responsive={true}
          columns={columns}
          dataSource={dataSource}
          rowKey="id"
          // onRow={(record) => ({
          //   onClick: () => handleView(record),
          // })}
        />
      </ConfigProvider>
      {/* <Modal
        open={isModalViewOpen}
        onOk={() => setIsModalViewOpen(false)}
        onCancel={() => setIsModalViewOpen(false)}
        footer={null}
        centered
      >
        <div className="text-black bg-primary">
          <div className="p-5">
            <div className="flex items-center">
              <img
                className="size-24 rounded-full"
                src={`${user?.imageUrl}`}
                alt="Profile"
              />
              <div>
                <h1 className="text-start text-xl font-semibold my-2 ml-5">
                  {user?.firstName} {user?.lastName}
                </h1>
                <h1 className="text-start font-semibold  my-2 ml-5">I am  Ui/Ux designer. </h1>
                <p className="text-start   my-2 ml-5">100 connections</p>
              </div>
            </div>
            <div className="flex justify-between py-3 border-b">
              <p>Account ID :</p>
              <p>{user?.accountID || "N/A"}</p>
            </div>
            <div className="flex justify-between py-3 border-b">
              <p>First Name :</p>
              <p>{user?.firstName || "N/A"}</p>
            </div>
            <div className="flex justify-between py-3 border-b">
              <p>Last Name :</p>
              <p>{user?.lastName || "N/A"}</p>
            </div>
            <div className="flex justify-between py-3 border-b">
              <p>Email :</p>
              <p>{user?.email || "N/A"}</p>
            </div>
            <div className="flex justify-between py-3 border-b">
              <p>Date of Birth :</p>
              <p>5050</p>
            </div>
            <div className="flex justify-between py-3 border-b">
              <p>Gender :</p>
              <p> male </p>
            </div>
            <div className="flex justify-between py-3 border-b">
              <p>Joining date :</p>
              <p>2002</p>
            </div>
            <div>
              <h1 className="text-xl text-black font-semibold">Identity card photo</h1>
              <div className="flex justify-between space-x-3 pt-3">
                <div className="bg-[#606060] w-[49%] h-[150px] rounded-md"></div>
                <div className="bg-[#606060] w-[49%] h-[150px] rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </Modal> */}
    </section>
  );
};

export default Users;
