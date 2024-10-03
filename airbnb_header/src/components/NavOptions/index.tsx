import { useState } from 'react';
import * as S from './styles';

export type NavOptionType = '숙소' | '체험';

interface NavOptionsProps {
  onOptionChange: (option: NavOptionType) => void;
}

export const NavOptions = ({ onOptionChange }: NavOptionsProps) => {
  const [activeOption, setActiveOption] = useState('숙소');

  const onOptionClick = (option: NavOptionType) => {
    setActiveOption(option);
    onOptionChange(option);
  };

  return (
    <S.NavOptionsContainer>
      <S.NavOption href='#' isActive={activeOption === '숙소'} onClick={() => onOptionClick('숙소')}>
        숙소
      </S.NavOption>
      <S.NavOption href='#' isActive={activeOption === '체험'} onClick={() => onOptionClick('체험')}>
        체험
      </S.NavOption>
    </S.NavOptionsContainer>
  );
};
