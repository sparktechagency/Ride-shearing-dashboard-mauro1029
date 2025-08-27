




import { useState } from "react";
import { Table, Button, Form, Input } from "antd";
import { IoMdEye } from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const { Item } = Form;

const DriverDetails = () => {
    const [selectedDriver, setSelectedDriver] = useState();
    const [selectedRow, setSelectedRow] = useState(null); // State to track the selected row
  const { t } = useTranslation();
    // Sample Data for the Driver List
    const driverList = [
        { key: 1, name: "Joanville58", email: "supportinfo@gmail.com", phone: '01589456522', address: 'Dhaka,Bangladesh', Date_of_Birth: '1999-7-14', Vehicle_Type: 'privet car', Vehicle_Model: "lumbergyny", License: "18drg669w", Joining: '25 july' },
        { key: 2, name: "Oliver789", email: "contact@servico.com", phone: '01689456522', address: 'Rajshahi,Bangladesh', Date_of_Birth: '1900-7-14', Vehicle_Type: 'privet car', Vehicle_Model: "lumbergyny", License: "18drg669w", Joining: '25 july' },
        { key: 3, name: "Liam123", email: "help@domain.org", phone: '5464568945', address: 'Chottogram,Bangladesh', Date_of_Birth: '1990-4-14', Vehicle_Type: 'privet car', Vehicle_Model: "lumbergyny", License: "18drg669w", Joining: '25 july' },
        { key: 4, name: "Sophia001", email: "query@domain.com", phone: '456622', address: 'naowalkhali,Bangladesh', Date_of_Birth: '1995-7-14', Vehicle_Type: 'privet car', Vehicle_Model: "lumbergyny", License: "18drg669w", Joining: '25 july' },
        { key: 5, name: "soikot", email: "sokot@domain.com", phone: '01589456522', address: 'Brisal,Bangladesh', Date_of_Birth: '1999-7-14', Vehicle_Type: 'privet car', Vehicle_Model: "lumbergyny", License: "18drg669w", Joining: '25 july' },
        { key: 6, name: "sokina", email: "sokina@domain.com", phone: '01589456522', address: 'Dhaka,Bangladesh', Date_of_Birth: '1999-7-14', Vehicle_Type: 'privet car', Vehicle_Model: "lumbergyny", License: "18drg669w", Joining: '25 july' },
        { key: 7, name: "sonu", email: "sonu@domain.com", phone: '01589456522', address: 'Dhaka,Bangladesh', Date_of_Birth: '1999-7-14', Vehicle_Type: 'privet car', Vehicle_Model: "lumbergyny", License: "18drg669w", Joining: '25 july' },
        // Add more drivers as needed...
    ];

    // Driver Details Modal Content
    const handleViewDetails = (driver) => {
        console.log("Selected Driver:", driver); // Debugging line to verify selected driver data
        setSelectedDriver(driver);
    };
    const handleRowClick = (record) => {
        setSelectedRow(record.key); // Set the selected row key to highlight
    };

    const columns = [
        {
            title: t("#SL"),
            dataIndex: "key",
            key: "key",
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
            title: t("Actions"),
            key: "actions",
            render: (_, record) => (
                <Button
                    icon={<IoMdEye size={20} />}
                    onClick={() => handleViewDetails(record)}
                    className="bg-blue-500 text-white rounded-md"
                >
                   {t("View")}
                </Button>
            ),
        },
    ];

    const dataSource = driverList.map((driver) => ({
        ...driver,
        isSelected: driver.key === selectedRow, // Conditional highlighting
    }));

    return (
        <div className="flex">
            {/* Left side - Driver List Table */}
            <div className="w-2/3 p-6">
                <div className="flex  items-center my-6">
                    <Link to="/driver">
                        <IoChevronBack className="text-2xl" />
                    </Link>
                    <h1 className="text-2xl font-semibold">{t("Driver Details")}</h1>
                </div>
                 
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    pagination={false}
                    rowKey="key"
                    onRow={(record) => ({
                        onClick: () => handleRowClick(record), // Highlight row when clicked
                    })}
                    rowClassName={(record) => (record.isSelected ? "bg-gray-200" : "")} // Apply gray background to selected row
                    scroll={{ x: "max-content" }}
                />
            </div>

            {/* Right side - Driver Detail View */}
            {selectedDriver && (
                <div className="w-1/3 p-6 bg-gray-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h1 className="text-xl font-semibold mb-4">{t("Details")}</h1>
                        <div className="mb-4">
                            <img
                                src={`https://randomuser.me/api/portraits/men/1.jpg`}
                                alt="Profile"
                                className="rounded-full w-24 h-24 mb-4"
                            />
                            <div className="text-center">
                                <h2 className="text-lg font-semibold">{selectedDriver.name}</h2>
                                <p className="text-gray-600">{selectedDriver.email}</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Form
                                layout="vertical"
                                initialValues={selectedDriver} // Automatically populate form with selectedDriver data
                            >
                                <Item label={t("Phone Number")} name="phone">
                                    <Input disabled />
                                </Item>

                                <Item label={t("Address")} name="address">
                                    <Input disabled />
                                </Item>

                                <Item label={t("Date of Birth")} name="Date_of_Birth">
                                    <Input disabled />
                                </Item>

                                <Item label={t("Vehicle Type")} name="Vehicle_Type">
                                    <Input disabled />
                                </Item>

                                <Item label={t("Vehicle Model")} name="Vehicle_Model">
                                    <Input disabled />
                                </Item>

                                <Item label={t("License")} name="License">
                                    <Input disabled />
                                </Item>

                                <Item label={t("Joining")} name="Joining">
                                    <Input disabled />
                                </Item>
                            </Form>
                            <div className="flex justify-between space-x-3 pt-3">
                                <div className="w-[49%] h-[197px] p-4 bg-gray-300 rounded-md">{t("License Photo")}</div>
                                <div className="w-[49%] h-[197px] p-4 bg-gray-300 rounded-md">{t("ID Card Photo")}</div>
                            </div>
                            <Button className="mt-4 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                {t("Accept")}
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DriverDetails;
