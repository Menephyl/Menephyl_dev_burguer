import { Navigate, Outlet } from 'react-router-dom';
import { Footer, SideNavAdmin } from '../../components';
import { Container } from './styles';

export function AdminLayout() {
  const { admin: isAdmin } = JSON.parse(
    localStorage.getItem('devburger:userData'),
  );

  return isAdmin ? (
    <Container>
      <SideNavAdmin />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
      <Footer />
    </Container>
  ) : (
    <Navigate to="/login" />
  );
}
