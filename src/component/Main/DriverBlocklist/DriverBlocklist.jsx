import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { IoMdEye } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';

const DriverBlockList = () => {
    const [selectedDriver, setSelectedDriver] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

                <Button className="bg-blue-500 text-white rounded-md">Block List</Button>
            </div>

            {/* Driver List Table */}
            <div className="flex">
                {/* Left side - Driver List Table */}
                <div className="w-2/3 p-6">
                    <Table
                        columns={columns}
                        dataSource={driverList}
                        pagination={false}
                        rowKey="key"
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
                                <div className="mb-2">
                                    <strong>Phone Number: </strong>{selectedDriver.phone || 'N/A'}
                                </div>
                                <div className="mb-2">
                                    <strong>Address: </strong>{selectedDriver.address || 'N/A'}
                                </div>
                                <div className="mb-2">
                                    <strong>Date of Birth: </strong>{selectedDriver.Date_of_Birth || 'N/A'}
                                </div>
                                <div className="mb-2">
                                    <strong>Vehicle Type: </strong>{selectedDriver.Vehicle_Type || 'N/A'}
                                </div>
                                <div className="mb-2">
                                    <strong>Vehicle Model: </strong>{selectedDriver.Vehicle_Model || 'N/A'}
                                </div>
                                <div className="mb-2">
                                    <strong>License Plate: </strong>{selectedDriver.License || 'N/A'}
                                </div>
                                <div className="mb-2">
                                    <strong>Joining Date: </strong>{selectedDriver.Joining || 'N/A'}
                                </div>
                            </div>
                            <div className="flex justify-between space-x-3 pt-3">
                                <div className="w-[49%] h-[197px] p-4 bg-gray-300 rounded-md">License Photo</div>
                                <div className="w-[49%] h-[197px] p-4 bg-gray-300 rounded-md">ID Card Photo</div>
                            </div>
                            <Button className="mt-4 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                Unblock User
                            </Button>
                        </div>
                    </div>
                )}
            </div>


        </div>
    );
};

export default DriverBlockList;
