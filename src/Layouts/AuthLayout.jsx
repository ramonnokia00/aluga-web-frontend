import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/footer';
import { LoginProvider } from '../contexts/LoginContext';

const AuthLayout = () => {
  return (
    <div>

      <Outlet />
      <Footer />
    </div>
  );
};

export default AuthLayout;
