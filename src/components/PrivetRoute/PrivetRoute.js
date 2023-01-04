import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
export const PrivetRoute = ({ children }) => {
    const location = useLocation();
    const [userInfo, setUserInfo] = useContext(UserContext)

    return userInfo.email ? children : <Navigate to='/login' state={{ path: location.pathname }} />
}
