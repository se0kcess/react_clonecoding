import { useState } from 'react';
import * as S from './styles';

interface GuestPopupProps {
  onClose: () => void;
}

export const GuestPopup = ({ onClose }: GuestPopupProps) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const updateCount = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    setter((prev) => Math.max(0, prev + value));
  };

  return (
    <S.PopupContainer>
      <S.GuestType>
        <S.GuestInfo>
          <S.GuestTitle>성인</S.GuestTitle>
          <S.GuestSubtitle>13세 이상</S.GuestSubtitle>
        </S.GuestInfo>
        <S.CounterContainer>
          <S.CounterButton onClick={() => updateCount(setAdults, -1)} disabled={adults === 0}>
            -
          </S.CounterButton>
          <S.CounterValue>{adults}</S.CounterValue>
          <S.CounterButton onClick={() => updateCount(setAdults, 1)}>+</S.CounterButton>
        </S.CounterContainer>
      </S.GuestType>
      <S.GuestType>
        <S.GuestInfo>
          <S.GuestTitle>어린이</S.GuestTitle>
          <S.GuestSubtitle>2~12세</S.GuestSubtitle>
        </S.GuestInfo>
        <S.CounterContainer>
          <S.CounterButton onClick={() => updateCount(setChildren, -1)} disabled={children === 0}>
            -
          </S.CounterButton>
          <S.CounterValue>{children}</S.CounterValue>
          <S.CounterButton onClick={() => updateCount(setChildren, 1)}>+</S.CounterButton>
        </S.CounterContainer>
      </S.GuestType>
      <S.GuestType>
        <S.GuestInfo>
          <S.GuestTitle>유아</S.GuestTitle>
          <S.GuestSubtitle>2세 미만</S.GuestSubtitle>
        </S.GuestInfo>
        <S.CounterContainer>
          <S.CounterButton onClick={() => updateCount(setInfants, -1)} disabled={infants === 0}>
            -
          </S.CounterButton>
          <S.CounterValue>{infants}</S.CounterValue>
          <S.CounterButton onClick={() => updateCount(setInfants, 1)}>+</S.CounterButton>
        </S.CounterContainer>
      </S.GuestType>
      <S.GuestType>
        <S.GuestInfo>
          <S.GuestTitle>반려동물</S.GuestTitle>
          <S.GuestSubtitle>보조동물을 동반하시나요?</S.GuestSubtitle>
        </S.GuestInfo>
        <S.CounterContainer>
          <S.CounterButton onClick={() => updateCount(setPets, -1)} disabled={pets === 0}>
            -
          </S.CounterButton>
          <S.CounterValue>{pets}</S.CounterValue>
          <S.CounterButton onClick={() => updateCount(setPets, 1)}>+</S.CounterButton>
        </S.CounterContainer>
      </S.GuestType>
    </S.PopupContainer>
  );
};
