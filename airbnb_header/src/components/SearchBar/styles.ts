import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1050px;
  height: 50px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  margin: 20px 30px 10px 0px;
  border-radius: 60px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 20px 24px;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const SearchSection = styled.div`
  padding: 0 16px;
  flex: 1;
  border-right: 1px solid #dddddd;

  &:last-child {
    border-right: none;
  }
`;

export const HalfSearchSection = styled(SearchSection)`
  flex: 0.5;
`;

export const SearchLabel = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #222222;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 18px;
  color: #222222;
  margin-top: 5px;
  width: 100%;
  background: transparent;
`;

export const SearchButton = styled.button`
  background-color: #ff385c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #e61e4d;
  }
`;
