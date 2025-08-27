import React, { useState } from 'react';
import { Table, Button, Form, Input, Modal } from 'antd';
import { IoMdEye } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';

const { Item } = Form;

const DriverListDetails = () => {
    const [selectedDriver, setSelectedDriver] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null); // State to track the selected row

    // Sample Data for the Driver List
    const driverList = [
        { key: 1, name: 'Bashar', email: 'supportinfo@gmail.com', time: '11 Oct 24, 11:10PM' },
        { key: 2, name: 'Bashar', email: 'supportinfo@gmail.com', time: '11 Oct 24, 11:10PM' },
        { key: 3, name: 'Bashar', email: 'supportinfo@gmail.com', time: '11 Oct 24, 11:10PM' },
        { key: 4, name: 'Bashar', email: 'supportinfo@gmail.com', time: '11 Oct 24, 11:10PM' },
        { key: 5, name: 'Bashar', email: 'supportinfo@gmail.com', time: '11 Oct 24, 11:10PM' },
        { key: 6, name: 'Bashar', email: 'supportinfo@gmail.com', time: '11 Oct 24, 11:10PM' },
        { key: 7, name: 'Bashar', email: 'supportinfo@gmail.com', time: '11 Oct 24, 11:10PM' },
        { key: 8, name: 'Bashar', email: 'supportinfo@gmail.com', time: '11 Oct 24, 11:10PM' },
        { key: 9, name: 'Bashar', email: 'supportinfo@gmail.com', time: '11 Oct 24, 11:10PM' },
        { key: 10, name: 'Bashar', email: 'supportinfo@gmail.com', time: '11 Oct 24, 11:10PM' },
    ];

    // Driver Details Modal Content
    const handleViewDetails = (driver) => {
        setSelectedDriver(driver);
        setIsModalOpen(true);
    };

    const handleRowClick = (record) => {
        setSelectedRow(record.key); // Set the selected row key to highlight
    };

    const columns = [
        {
            title: '#SL',
            dataIndex: 'key',
            key: 'key',
            render: (text) => `0${text}`,
        },
        {
            title: 'User Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Time & Date',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Button
                    icon={<IoMdEye size={20} />}
                    onClick={() => handleViewDetails(record)}
                    className="bg-blue-500 text-white rounded-md"
                >
                    View
                </Button>
            ),
        },
    ];

    const dataSource = driverList.map((driver, index) => ({
        ...driver,
        isSelected: driver.key === selectedRow, // Conditional highlighting
    }));

    return (
        <div className="flex flex-col">
            {/* Top section with buttons */}
            <div className="flex justify-between p-6">
                <div className="flex  items-center my-6">
                    <Link to="/driver-list">
                        <IoChevronBack className="text-2xl" />
                    </Link>
                    <h1 className="text-2xl font-semibold">Driver List Details</h1>
                </div>
                
                <Link to='/blocklist'> <Button className="bg-blue-500 text-white rounded-md">Block List</Button> </Link>
            </div>

            {/* Driver List Table */}
            <div className="flex">
                {/* Left side - Driver List Table */}
                <div className="w-2/3 p-6">
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        pagination={false}
                        rowKey="key"
                        onRow={(record) => ({
                            onClick: () => handleRowClick(record), // Highlight row when clicked
                        })}
                        rowClassName={(record) => (record.isSelected ? 'bg-gray-200' : '')} // Apply gray background to selected row
                        scroll={{ x: 'max-content' }}
                    />
                </div>

                {/* Right side - Driver Detail View */}
                {selectedDriver && (
                    <div className="w-1/3 p-6 bg-gray-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h1 className="text-xl font-semibold mb-4">Details</h1>
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
                                <Form layout="vertical">
                                    <Item label="Phone Number" name="phone">
                                        <Input value={selectedDriver.phone || 'N/A'} disabled />
                                    </Item>
                                    <Item label="Address" name="address">
                                        <Input value={selectedDriver.address || 'N/A'} disabled />
                                    </Item>
                                    <Item label="Date of Birth" name="dob">
                                        <Input value={selectedDriver.Date_of_Birth || 'N/A'} disabled />
                                    </Item>
                                    <Item label="Vehicle Type" name="vehicle">
                                        <Input value={selectedDriver.Vehicle_Type || 'N/A'} disabled />
                                    </Item>
                                    <Item label="Vehicle Model" name="model">
                                        <Input value={selectedDriver.Vehicle_Model || 'N/A'} disabled />
                                    </Item>
                                    <Item label="License Plate" name="license">
                                        <Input value={selectedDriver.License || 'N/A'} disabled />
                                    </Item>
                                    <Item label="Joining Date" name="joinDate">
                                        <Input value={selectedDriver.Joining || 'N/A'} disabled />
                                    </Item>
                                </Form>
                                <div className="flex justify-between space-x-3 pt-3">
                                    <div className="w-[49%] h-[197px] p-4 bg-gray-300 rounded-md">License Photo</div>
                                    <div className="w-[49%] h-[197px] p-4 bg-gray-300 rounded-md">ID Card Photo</div>
                                </div>
                                <Button className="mt-4 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                    Block User
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DriverListDetails;
