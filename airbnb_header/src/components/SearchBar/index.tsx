import { SearchIcon } from '../Icons/Icons';
import * as S from './styles';

const SearchBar = () => {
  return (
    <S.SearchContainer>
      <S.SearchBarWrapper>
        <S.SearchSection>
          <S.SearchLabel>여행지</S.SearchLabel>
          <S.SearchInput placeholder='여행지 검색' />
        </S.SearchSection>
        <S.SearchSection>
          <S.SearchLabel>체크인</S.SearchLabel>
          <S.SearchInput placeholder='날짜 추가' />
        </S.SearchSection>
        <S.SearchSection>
          <S.SearchLabel>체크아웃</S.SearchLabel>
          <S.SearchInput placeholder='날짜 추가' />
        </S.SearchSection>
        <S.SearchSection>
          <S.SearchLabel>여행자</S.SearchLabel>
          <S.SearchInput placeholder='게스트 추가' />
        </S.SearchSection>
        <S.SearchButton>
          <SearchIcon size='lg' />
        </S.SearchButton>
      </S.SearchBarWrapper>
    </S.SearchContainer>
  );
};

export default SearchBar;
