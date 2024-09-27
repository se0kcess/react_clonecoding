import styled from 'styled-components';

export const NavOptionsContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavOption = styled.a<{ isActive?: boolean }>`
  padding: 1.2rem;
  text-decoration: none;
  color: ${(props) => (props.isActive ? '#222222' : '#6a6a6a')};
  font-weight: 400;
  font-size: 1.3rem;

  &:hover {
    background-color: #f7f7f7;
    border-radius: 2rem;
  }
`;
