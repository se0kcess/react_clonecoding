import styled from 'styled-components';

interface SearchBarContainerProps {
  isActive: boolean;
}

interface SearchSectionButtonProps {
  isActive?: boolean;
}

export const SearchBarWrapper = styled.div<SearchBarContainerProps>`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.isActive ? '#f7f7f7' : '#ffffff')};
  border-radius: 60px;
  width: 50%;
  border: 1px solid #dddddd;
  margin: 0 auto;
  border-radius: 60px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 1500px) {
    width: 70%;
  }
`;

export const SearchSectionButton = styled.button<SearchSectionButtonProps>`
  position: relative;
  padding: 1rem 2.5rem;
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
  font-size: 1rem;
  font-weight: 600;
  color: #222222;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 1.2rem;
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
  margin-right: 1rem;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;

  &:hover {
    background-color: #e61e4d;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 2em;
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
