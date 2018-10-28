import App from './App';
import Home from './home';
import LogIn from './login';
import NotFound from './notfound';

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
        component: NotFound
    }
];

export default Routes;
