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

interface GuestCounts {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

const SearchBar = ({ activeOption }: SearchBarProps) => {
  const [activeButton, setActiveButton] = useState<ActiveButton>(null);
  const [isLocationPopupOpen, setIsLocationPopupOpen] = useState(false);
  const [isGuestPopupOpen, setIsGuestPopupOpen] = useState(false);
  const [guestCounts, setGuestCounts] = useState<GuestCounts>({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const togglePopup = (button: ActiveButton) => {
    if (activeButton === button) {
      setActiveButton(null);
      setIsLocationPopupOpen(false);
      setIsGuestPopupOpen(false);
    } else {
      setActiveButton(button);
      setIsLocationPopupOpen(button === 'location');
      setIsGuestPopupOpen(button === 'guests');
    }
  };

  const handleGuestCountChange = (counts: GuestCounts) => {
    setGuestCounts(counts);
  };

  const getGuestCountDisplay = () => {
    const { adults, children, infants, pets } = guestCounts;
    const totalGuests = adults + children;
    let display = '';

    if (totalGuests > 0) {
      display += `게스트 ${totalGuests}명`;
      if (infants > 0) {
        display += `, 유아 : ${infants}명`;
      }
      if (pets > 0) {
        display += `, 반려동물 ${pets}마리`;
      }
    } else {
      display = '게스트 추가';
    }

    return display;
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
          <S.SearchInput placeholder={getGuestCountDisplay()} readOnly />
          {isGuestPopupOpen && (
            <S.PopupWrapper>
              <GuestPopup
                onClose={(e) => {
                  e.stopPropagation();
                  togglePopup('guests');
                }}
                onGuestCountChange={handleGuestCountChange}
                initialCounts={guestCounts}
              />
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
