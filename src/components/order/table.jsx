import React from 'react';
import { Table } from 'antd';
const columns = [
    {
        title: 'Tên sản phẩm',
        dataIndex: 'productName',
        key: 'productName',
        render: (text) => <h1 className='line-clamp-1'>{text}</h1>,
    },
    {
        title: 'Hình ảnh',
        dataIndex: 'image',
        key: 'image',
        render: (text) => <img src={text} alt={text} style={{ width: '50px' }} />,
    },
    {
        title: 'Số lượng',
        dataIndex: 'quantity',
        key: 'quantity',
        render: (text) => <h1 className='text-center'>{text}</h1>,
    },
    {
        title: 'Đơn giá (VNĐ)',
        dataIndex: 'price',
        key: 'price',
        render: (text) => <h1 className='text-center'>{text}</h1>,
    },
];
const data = [
    {
        key: '1',
        productName: 'iPhone 15 Pro Max 256GB',
        image: "https://img.lazcdn.com/g/p/3ed750c24e7748cd9eb26d87698516ed.jpg_2200x2200q75.jpg_.webp",
        quantity: 1,
        price: "29.500.000",
    },
    {
        key: '2',
        productName: 'iPhone 15 Pro Max 1TB',
        image: "https://img.lazcdn.com/g/p/3ed750c24e7748cd9eb26d87698516ed.jpg_2200x2200q75.jpg_.webp",
        quantity: 1,
        price: "29.500.000",
    },
];
const MainTable = () => <Table columns={columns} dataSource={data} />;
export default MainTable;