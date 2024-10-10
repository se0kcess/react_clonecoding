import styled from 'styled-components';

interface SearchBarContainerProps {
  isActive: boolean;
}
interface SearchSectionButtonProps {
  isActive?: boolean;
}

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 1050px;
  height: 80px;
  border: 1px solid #dddddd;
  margin: 20px 30px 10px 0px;
  border-radius: 60px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const SearchBarContainer = styled.div<SearchBarContainerProps>`
  display: flex;
  flex-grow: 1;
  align-items: center;
  height: 100%;
  background-color: ${(props) => (props.isActive ? '#f7f7f7' : '#ffffff')};
  border-radius: 60px;
  transition: background-color 0.3s ease;
`;

export const SearchSectionButton = styled.button<SearchSectionButtonProps>`
  position: relative;
  padding: 16px 24px;
  flex: 1;
  background: ${(props) => (props.isActive ? '#ffffff' : 'none')};
  border: none;
  cursor: pointer;
  text-align: left;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50px;

  &:hover {
    background-color: ${(props) => (props.isActive ? '#ffffff' : '#f7f7f7')};
  }
`;

export const HalfSearchSectionButton = styled(SearchSectionButton)`
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
  cursor: pointer;
`;

export const SearchButton = styled.button`
  background-color: #ff385c;
  color: white;
  border: none;
  margin-right: 10px;
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

export const Divider = styled.div`
  width: 1px;
  height: 32px;
  background-color: #dddddd;
`;

export const PopupWrapper = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  z-index: 1000;
`;

export const PopupContainer = styled.div`
  background-color: white;
  border-radius: 32px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 04%), 0 8px 16px rgb(0 0 0 / 15%);
  padding: 40px;
  width: 500px;
`;
