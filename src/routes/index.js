import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import ContactPage from '../pages/contact';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import BlogDetailPage from '../pages/blog-detail';
import SearchPage from '../pages/search';
import NotFoundPage from '../pages/not-found'

export const routes = [
    { path: '/', element: HomePage },
    { path: '/about', element: AboutPage },
    { path: '/contact', element: ContactPage },
    { path: '/login', element: LoginPage },
    { path: '/register', element: RegisterPage },
    { path: '/blog/:blogId', element: BlogDetailPage },
    { path: '/search/:keyword', element: SearchPage },
    { path: '*', element: NotFoundPage }
];