import styled from 'styled-components';

export const NavOptionsContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const NavOption = styled.a<{ isActive?: boolean }>`
  padding: 10px 24px;
  margin-top: 20px;
  text-decoration: none;
  color: ${(props) => (props.isActive ? '#222222' : '#717171')};
  font-weight: ${(props) => (props.isActive ? '600' : '400')};
  font-size: 20px;

  &:hover {
    color: #222222;
  }
`;
