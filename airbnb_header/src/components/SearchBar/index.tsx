import { useState } from 'react';
import { SearchIcon } from '../Icons/Icons';
import { NavOptionType } from '../NavOptions';
import * as S from './styles';
import { LocationPopup } from '../LocationPopup';

interface SearchBarProps {
  activeOption: NavOptionType;
}

const SearchBar = ({ activeOption }: SearchBarProps) => {
  const [isLocationPopupOpen, setIsLocationPopupOpen] = useState(false);

  const onLocationClick = () => {
    setIsLocationPopupOpen(!isLocationPopupOpen);
  };

  return (
    <S.SearchWrapper>
      <S.SearchBarContainer>
        <S.SearchSection onClick={onLocationClick}>
          <S.SearchLabel>여행지</S.SearchLabel>
          <S.SearchInput placeholder='여행지 검색' />
        </S.SearchSection>
        {isLocationPopupOpen && <LocationPopup onClose={() => setIsLocationPopupOpen(false)} />}
        {activeOption === '숙소' ? (
          <>
            <S.HalfSearchSection>
              <S.SearchLabel>체크인</S.SearchLabel>
              <S.SearchInput placeholder='날짜 추가' />
            </S.HalfSearchSection>
            <S.HalfSearchSection>
              <S.SearchLabel>체크아웃</S.SearchLabel>
              <S.SearchInput placeholder='날짜 추가' />
            </S.HalfSearchSection>
          </>
        ) : (
          <S.SearchSection>
            <S.SearchLabel>날짜</S.SearchLabel>
            <S.SearchInput placeholder='날짜 추가' />
          </S.SearchSection>
        )}
        <S.SearchSection>
          <S.SearchLabel>여행자</S.SearchLabel>
          <S.SearchInput placeholder='게스트 추가' />
        </S.SearchSection>
      </S.SearchBarContainer>
      <S.SearchButton>
        <SearchIcon />
      </S.SearchButton>
    </S.SearchWrapper>
  );
};

export default SearchBar;
