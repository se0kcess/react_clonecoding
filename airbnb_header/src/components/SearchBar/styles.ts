import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #dddddd;
  border-radius: 50px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`;

export const SearchSection = styled.div`
  flex: 1;
  padding: 20px 32px;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #ebebeb;
    border-radius: 32px;
  }

  &:not(:nth-child(n + 4))::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 24px;
    width: 1px;
    background-color: #dddddd;
  }
`;

export const SearchLabel = styled.div`
  font-size: 16px;
  line-height: 16px;
  padding-bottom: 4px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: 18px;
  width: 100%;
`;

export const SearchButton = styled.button`
  background-color: #ff385c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 8px;

  &:hover {
    background-color: #d70466;
  }
`;
