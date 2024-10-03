import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 6rem;
  background-color: #ffffff;
  border-bottom: 1px solid #d8d8d8;
`;

export const LeftSection = styled.div`
  flex: 1;
`;

export const CenterSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
