import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import ContactPage from '../pages/contact';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import BlogDetailPage from '../pages/blog-detail';
import SearchPage from '../pages/search';
import CategoryPage from '../pages/category';
import ProductDetailPage from '../pages/product-detail';
import OrderPage from '../pages/order';
import NotFoundPage from '../pages/not-found';

export const routes = [
    { path: '/', element: HomePage, showCarousel: true },
    { path: '/about', element: AboutPage, showCarousel: true },
    { path: '/contact', element: ContactPage, showCarousel: false },
    { path: '/login', element: LoginPage, showCarousel: false },
    { path: '/register', element: RegisterPage, showCarousel: false },
    { path: '/blog/:blogId', element: BlogDetailPage, showCarousel: false },
    { path: '/search/:keyword', element: SearchPage, showCarousel: false },
    { path: '/product-detail/:productId', element: ProductDetailPage, showCarousel: false },
    { path: '/order', element: OrderPage, showCarousel: false },
    { path: '/category/:categorySlug', element: CategoryPage, showCarousel: true },
    { path: '*', element: NotFoundPage, showCarousel: false }
];