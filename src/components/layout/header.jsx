import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { Link, useNavigate } from "react-router-dom";

import Logo from "./logo"

const routes = [
    { path: '/categories', label: 'Danh mục' },
    { path: '/contact', label: 'Liên hệ' },
    { path: '/about', label: 'Giới thiệu' },
];

function Header() {
    const navigate = useNavigate();

    const handleNavigate = (link) => {
        navigate(link);
    }

    return (
        <header className="py-5 border-b">
            <div className="container flex justify-between items-center gap-5">
                <Logo />
                <ul className="flex gap-5 max-md:hidden">
                    {routes.map(route => (
                        <li key={route.path}>
                            <Link to={route.path}>{route.label}</Link>
                        </li>
                    ))}
                </ul>
                <div className='max-lg:hidden w-[300px]'>
                    <Input size="large" placeholder="Nhập để tìm kiếm ..." prefix={<SearchOutlined />} />
                </div>
                <div className="max-md:hidden flex gap-3">
                    <Button className='lg:hidden' size='large'><SearchOutlined /></Button>
                    <Button size='large' onClick={() => handleNavigate('/register')}>Đăng ký</Button>
                    <Button type='primary' size='large' onClick={() => handleNavigate('/login')}>Đăng nhập</Button>
                </div>
            </div>
        </header>
    )
}

export default Header