
import { createBrowserRouter } from 'react-router';
import MainLayout from '../MainLayout/MainLayout';
import HomePage from '../Pages/HomePage';



const route = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            { index: true, Component: HomePage },
            // { path: '/timeline', Component: TimeLine },
            // { path: '/stats', Component: Stats },
            // {
            //     path: '/details/:id',
            //     Component: DetailPage,
            //     loader: () => fetch(`/data.json`)
            // }
        ],
        // errorElement: <ErrorElement></ErrorElement>
    }
])

export default route;