import Home from './Home';
import LogIn from './LogIn';
import NotFound from './NotFound';
import Scan from "./Scan";

// import loadData from './helpers/loaddata';

const Routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/login',
        component: LogIn,
        // loadData: () => loadData('posts')
    },
    {
        path: '/home',
        component: Home,
        // loadData: () => loadData('todos')
    },
    {
        path: '/scan',
        component: Scan,
        // loadData: () => loadData('todos')
    },
    {
        component: NotFound
    }
];

export default Routes;
