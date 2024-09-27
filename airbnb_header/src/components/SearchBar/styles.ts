import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 2rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 460px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1rem;
  flex-grow: 1;
`;

export const SearchButton = styled.button`
  background-color: #ff385c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
