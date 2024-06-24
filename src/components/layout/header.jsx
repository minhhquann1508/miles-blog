import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

import { signOut } from "../../redux/slice/authSlice";

import { Input, Button, Avatar } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { ERROR_AVATAR_IMAGE } from "../../utils/constant";

import Logo from "./logo"

const routes = [
    { path: '/categories', label: 'Danh mục' },
    { path: '/contact', label: 'Liên hệ' },
    { path: '/about', label: 'Giới thiệu' },
];

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const handleNavigate = (link) => {
        navigate(link);
    }

    const handleLogout = () => {
        dispatch(signOut());
        navigate('/login');
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
                <div className='max-lg:hidden w-[280px]'>
                    <Input size="large" placeholder="Nhập để tìm kiếm ..." prefix={<SearchOutlined />} />
                </div>
                <div className="max-md:hidden flex gap-3">
                    <Button className='lg:hidden' size='large'><SearchOutlined /></Button>
                    {user ?
                        <div className='flex gap-3 items-center'>
                            <Avatar src={<img src={user.avatar || ERROR_AVATAR_IMAGE} alt="profile" />} />
                            <Button className="underline" type="text" onClick={handleLogout}>Đăng xuất</Button>
                        </div> :
                        <div className='flex gap-3'>
                            <Button size='large' onClick={() => handleNavigate('/register')}>Đăng ký</Button>
                            <Button type='primary' size='large' onClick={() => handleNavigate('/login')}>Đăng nhập</Button>
                        </div>
                    }

                </div>
            </div>
        </header>
    )
}

export default Header