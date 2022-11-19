import { useContext } from 'react';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import LeftBar from './components/leftBar/LeftBar';
import Navbar from './components/navbar/Navbar';
import RightBar from './components/rightBar/RightBar';
import { AuthContext } from './context/AuthContext';
import { DarkModeContext } from './context/darkModeContext';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import './style.scss';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const { user } = useContext(AuthContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <LeftBar />
          <div style={{ flex: 5 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: user ? <Layout /> : <Register />,
      children: [
        { path: '/', element: <Home /> },
        {
          path: '/profile/:username',
          element: <Profile />,
        },
      ],
    },
    {
      path: '/login',
      element: user ? <Navigate replace to={'/'} /> : <Login />,
    },
    {
      path: '/register',
      element: user ? <Navigate replace to={'/'} /> : <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
