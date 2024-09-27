import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.a`
  padding: 1.2rem 1rem;
  border-radius: 24px;
  text-decoration: none;
  color: #222222;
  font-size: 1.1rem;

  &:hover {
    background-color: #f7f7f7;
  }
`;

export const UserMenuButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: 1px solid #dddddd;
  border-radius: 24px;
  padding: 6px 18px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  }
`;

export const UserIconWrapper = styled.span`
  background-color: #717171;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-left: 12px;
`;
