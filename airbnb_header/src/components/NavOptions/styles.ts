import styled from 'styled-components';

export const NavOptionsContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10rem;
`;

export const NavOption = styled.a<{ isActive?: boolean }>`
  margin: 1em;
  text-decoration: none;
  color: ${(props) => (props.isActive ? '#222222' : '#717171')};
  font-weight: ${(props) => (props.isActive ? '600' : '400')};
  font-size: 1.4rem;

  &:hover {
    color: #222222;
  }
`;
