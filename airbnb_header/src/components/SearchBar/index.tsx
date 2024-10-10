import { useState } from 'react';
import { SearchIcon } from '../../assets/Icons/Icons';
import { NavOptionType } from '../NavOptions';
import * as S from './styles';
import { LocationPopup } from '../LocationPopup';
import { GuestPopup } from '../GuestPopup';

interface SearchBarProps {
  activeOption: NavOptionType;
}

type ActiveButton = 'location' | 'checkIn' | 'checkOut' | 'guests' | null;

const SearchBar = ({ activeOption }: SearchBarProps) => {
  const [activeButton, setActiveButton] = useState<ActiveButton>(null);
  const [isLocationPopupOpen, setIsLocationPopupOpen] = useState(false);
  const [isGuestPopupOpen, setIsGuestPopupOpen] = useState(false);

  const togglePopup = (button: ActiveButton) => {
    if (activeButton === button) {
      // 같은 버튼을 두 번 클릭한 경우
      setActiveButton(null);
      setIsLocationPopupOpen(false);
      setIsGuestPopupOpen(false);
    } else {
      // 다른 버튼을 클릭한 경우
      setActiveButton(button);
      setIsLocationPopupOpen(button === 'location');
      setIsGuestPopupOpen(button === 'guests');
    }
  };

  return (
    <S.SearchWrapper>
      <S.SearchBarContainer isActive={activeButton !== null}>
        <S.SearchSectionButton onClick={() => togglePopup('location')} isActive={activeButton === 'location'}>
          <S.SearchLabel>여행지</S.SearchLabel>
          <S.SearchInput placeholder='여행지 검색' readOnly />
          {isLocationPopupOpen && (
            <S.PopupWrapper>
              <LocationPopup onClose={() => togglePopup('location')} />
            </S.PopupWrapper>
          )}
        </S.SearchSectionButton>
        <S.Divider />
        {activeOption === '숙소' ? (
          <>
            <S.HalfSearchSectionButton onClick={() => togglePopup('checkIn')} isActive={activeButton === 'checkIn'}>
              <S.SearchLabel>체크인</S.SearchLabel>
              <S.SearchInput placeholder='날짜 추가' readOnly />
            </S.HalfSearchSectionButton>
            <S.Divider />
            <S.HalfSearchSectionButton onClick={() => togglePopup('checkOut')} isActive={activeButton === 'checkOut'}>
              <S.SearchLabel>체크아웃</S.SearchLabel>
              <S.SearchInput placeholder='날짜 추가' readOnly />
            </S.HalfSearchSectionButton>
          </>
        ) : (
          <S.SearchSectionButton onClick={() => togglePopup('checkIn')} isActive={activeButton === 'checkIn'}>
            <S.SearchLabel>날짜</S.SearchLabel>
            <S.SearchInput placeholder='날짜 추가' readOnly />
          </S.SearchSectionButton>
        )}
        <S.Divider />
        <S.SearchSectionButton onClick={() => togglePopup('guests')} isActive={activeButton === 'guests'}>
          <S.SearchLabel>여행자</S.SearchLabel>
          <S.SearchInput placeholder='게스트 추가' readOnly />
          {isGuestPopupOpen && (
            <S.PopupWrapper>
              <GuestPopup onClose={() => togglePopup('guests')} />
            </S.PopupWrapper>
          )}
        </S.SearchSectionButton>
      </S.SearchBarContainer>
      <S.SearchButton>
        <SearchIcon />
      </S.SearchButton>
    </S.SearchWrapper>
  );
};

export default SearchBar;
