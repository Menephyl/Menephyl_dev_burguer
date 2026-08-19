import { SignOut } from '@phosphor-icons/react';
import { useResolvedPath } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { useUser } from '../../hooks/UserContext.jsx';
import { navLinks } from './NavLinks.jsx';
import { Container, Footer, NavLink, NavLinkContainer } from './styles.js';

export function SideNavAdmin() {
  const { logout } = useUser();
  const { pathname } = useResolvedPath();
  return (
    <Container>
      <img src={Logo} alt="DevBurger-Logo" />

      <NavLinkContainer>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            $isActive={pathname === link.path}
          >
            {link.icon}
            <p>{link.label}</p>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <NavLink to="/login" onClick={logout}>
          <SignOut />
          <p>Sair</p>
        </NavLink>
      </Footer>
    </Container>
  );
}
