import { useEffect, useState } from 'react';
import * as S from './styles';

interface GuestCounts {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

interface GuestPopupProps {
  onClose: (e: React.MouseEvent) => void;
  onGuestCountChange: (counts: GuestCounts) => void;
  initialCounts: GuestCounts;
}

export const GuestPopup = ({ onClose, onGuestCountChange, initialCounts }: GuestPopupProps) => {
  const [counts, setCounts] = useState<GuestCounts>(initialCounts);

  const updateCount = (type: keyof GuestCounts, value: number) => {
    setCounts((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + value),
    }));
  };

  useEffect(() => {
    onGuestCountChange(counts);
  }, [counts]);

  const handleButtonClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation();
    action();
  };

  return (
    <S.PopupContainer onClick={(e) => e.stopPropagation()}>
      <S.GuestType>
        <S.GuestInfo>
          <S.GuestTitle>성인</S.GuestTitle>
          <S.GuestSubtitle>13세 이상</S.GuestSubtitle>
        </S.GuestInfo>
        <S.CounterContainer>
          <S.CounterButton
            onClick={(e) => handleButtonClick(e, () => updateCount('adults', -1))}
            disabled={counts.adults === 0}
          >
            -
          </S.CounterButton>
          <S.CounterValue>{counts.adults}</S.CounterValue>
          <S.CounterButton onClick={(e) => handleButtonClick(e, () => updateCount('adults', 1))}>+</S.CounterButton>
        </S.CounterContainer>
      </S.GuestType>
      <S.GuestType>
        <S.GuestInfo>
          <S.GuestTitle>어린이</S.GuestTitle>
          <S.GuestSubtitle>2~12세</S.GuestSubtitle>
        </S.GuestInfo>
        <S.CounterContainer>
          <S.CounterButton
            onClick={(e) => handleButtonClick(e, () => updateCount('children', -1))}
            disabled={counts.children === 0}
          >
            -
          </S.CounterButton>
          <S.CounterValue>{counts.children}</S.CounterValue>
          <S.CounterButton onClick={(e) => handleButtonClick(e, () => updateCount('children', 1))}>+</S.CounterButton>
        </S.CounterContainer>
      </S.GuestType>
      <S.GuestType>
        <S.GuestInfo>
          <S.GuestTitle>유아</S.GuestTitle>
          <S.GuestSubtitle>2세 미만</S.GuestSubtitle>
        </S.GuestInfo>
        <S.CounterContainer>
          <S.CounterButton
            onClick={(e) => handleButtonClick(e, () => updateCount('infants', -1))}
            disabled={counts.infants === 0}
          >
            -
          </S.CounterButton>
          <S.CounterValue>{counts.infants}</S.CounterValue>
          <S.CounterButton onClick={(e) => handleButtonClick(e, () => updateCount('infants', 1))}>+</S.CounterButton>
        </S.CounterContainer>
      </S.GuestType>
      <S.GuestType>
        <S.GuestInfo>
          <S.GuestTitle>반려동물</S.GuestTitle>
          <S.GuestSubtitle>보조동물을 동반하시나요?</S.GuestSubtitle>
        </S.GuestInfo>
        <S.CounterContainer>
          <S.CounterButton
            onClick={(e) => handleButtonClick(e, () => updateCount('pets', -1))}
            disabled={counts.pets === 0}
          >
            -
          </S.CounterButton>
          <S.CounterValue>{counts.pets}</S.CounterValue>
          <S.CounterButton onClick={(e) => handleButtonClick(e, () => updateCount('pets', 1))}>+</S.CounterButton>
        </S.CounterContainer>
      </S.GuestType>
    </S.PopupContainer>
  );
};
