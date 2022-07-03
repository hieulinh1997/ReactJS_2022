import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Route, Router, Routes, useNavigate } from 'react-router-dom';
import cityApi from './api/cityApi';
import './App.css';
import { useAppDispatch } from './app/hooks';
import { HistoryRouter } from './component/Common/HistoryRouter';
import { NotFound } from './component/Common/NotFound';
import PrivateRoute from './component/Common/PrivateRoute';
import { AdminLayout } from './component/Layout';
import { authActions } from './features/auth/authSlice';
import { LoginPage } from './features/auth/pages/LoginPage';
import { history } from "./utils";

// const { unstable_HistoryRouter: HistoryRouter } = require("react-router-dom");
function App() {
  const dispatch = useAppDispatch();
  // let navigate = useNavigate()
  useEffect(() => {
    cityApi.getAll().then(res => console.log(res));
  })
  return (
    <>
      <Button variant='contained' color='primary' onClick={() => dispatch(authActions.logout())}>
        Logout
      </Button>
      <HistoryRouter history={history} > 
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<PrivateRoute />}>
            <Route path='/admin' element={<AdminLayout />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HistoryRouter>
      {/* <Router location={history.location} navigator={history}>

      </Router> */}

    </>
  );
}

export default App;
