import * as S from './styles';

const SearchBar = () => (
  <S.StyledSearchBar>
    <S.SearchInput placeholder='여행지 검색' />
    <S.SearchButton>🔍</S.SearchButton>
  </S.StyledSearchBar>
);

export default SearchBar;
