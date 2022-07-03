import { Navigate, Outlet, RouteProps } from 'react-router-dom';

const PrivateRoute = (props: RouteProps) => {
    console.log('private route');
    

    const isLoggedIn = Boolean(localStorage.getItem('access_token'))
    
    if (!isLoggedIn) return <Navigate to='/login' />

    return <Outlet/>;
}

export default PrivateRoute
