import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/footer';

const AuthLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer/> 
    </div>
  );
};

export default AuthLayout;
