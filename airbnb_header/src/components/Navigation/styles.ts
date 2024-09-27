import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #222;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 20%;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  transition: background-color 0.2s;
  margin-bottom: 1rem;

  &:hover {
    background-color: #f7f7f7;
  }
`;
