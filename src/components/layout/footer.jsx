import { FaFacebookMessenger, FaInstagram, FaTwitter } from "react-icons/fa";

import { Link } from 'react-router-dom';

import { APP_NAME } from "../../utils/constant";

function Footer() {
    const listSocial = [
        { path: '/', icon: FaFacebookMessenger },
        { path: '/', icon: FaInstagram },
        { path: '/', icon: FaTwitter },
    ]

    return (
        <footer className="bg-[#2F2E2E] h-[200px] flex items-center justify-center">
            <div className="container flex flex-col items-center justify-center gap-8">
                <ul className='flex gap-5'>
                    {listSocial.map((item, index) => (
                        <li key={index}>
                            <Link to={item.path}>
                                <item.icon className='text-3xl text-white hover:text-[#ccc] duration-200' />
                            </Link>
                        </li>
                    ))}
                </ul>
                <p className="text-[#7C7456]">© 2024 by Minh Quân. <span className="uppercase underline font-extrabold">{APP_NAME}</span></p>
            </div>
        </footer>
    )
}

export default Footer