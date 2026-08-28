import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/Footer/index.jsx';
import { Header } from '../../components/Header/index.jsx';


export function UserLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
