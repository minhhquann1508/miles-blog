import React, { useState, memo } from 'react';
import { Dropdown, Skeleton, Space } from 'antd';

import { FaAngleDown } from "react-icons/fa";

import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function DropdownCategories() {
    const { categories } = useSelector((state) => state.categories);

    const navigate = useNavigate();

    let items = [];

    const [open, setOpen] = useState(false);

    const handleOpenChange = (nextOpen, info) => {
        if (info.source === 'trigger' || nextOpen) {
            setOpen(nextOpen);
        }
    };

    if (!categories) {
        items = [
            {
                label: <Skeleton title={{ width: 200 }} paragraph={{ rows: 1, width: 200 }} />,
                key: '1',
            },
            {
                label: <Skeleton title={{ width: 200 }} paragraph={{ rows: 1, width: 200 }} />,
                key: '2',
            },
            {
                label: <Skeleton title={{ width: 200 }} paragraph={{ rows: 1, width: 200 }} />,
                key: '3',
            },
        ];
        return (
            <Dropdown
                menu={{
                    items,
                }}
                onOpenChange={handleOpenChange}
                open={open}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space className='hover:text-[#535bf2] duration-200 cursor-pointer' onClick={() => navigate('/navigate/all')}>
                        Danh mục
                        <FaAngleDown />
                    </Space>
                </a>
            </Dropdown>
        );
    } else {
        items = categories.map((category) => (
            {
                label: <Link to={`/category/${category.slug}`} className='flex items-center gap-3'><div><img width={20} src={category.thumbnail} alt={category.name} /></div><span>{category.name}</span></Link>,
                key: category.slug,
            }
        ));

        return (
            <Dropdown
                menu={{
                    items,
                    style: { width: 200 }
                }}
                onOpenChange={handleOpenChange}
                open={open}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space className='hover:text-[#535bf2] duration-200 cursor-pointer' onClick={() => navigate('/navigate/all')}>
                        Danh mục
                        <FaAngleDown />
                    </Space>
                </a>
            </Dropdown>
        )
    }
}

export default memo(DropdownCategories)