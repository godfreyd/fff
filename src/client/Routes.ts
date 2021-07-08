import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

export default [
    {
        ...HomePage,
        path: '/',
        exact: true,
    },
    {
        ...NotFoundPage,
    },
];