import { useState } from 'react';
import Logo from '../Logo';
import Navigation from '../Navigation';
import NavOptions, { NavOptionType } from '../NavOptions';
import * as S from './styles';
import SearchBar from '../SearchBar';

export default function Header() {
  const [activeOption, setActiveOption] = useState<NavOptionType>('숙소');

  const onOptionChange = (option: NavOptionType) => {
    setActiveOption(option);
  };

  return (
    <>
      <S.HeaderContainer>
        <Logo />
        <NavOptions onOptionChange={onOptionChange} />
        <Navigation />
      </S.HeaderContainer>
      <S.SearchContainer>
        <SearchBar activeOption={activeOption} />
      </S.SearchContainer>
    </>
  );
}
