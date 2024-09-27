import Logo from '../Logo';
import SearchBar from '../SearchBar';
import Navigation from '../Navigation';
import * as S from './styles';
import { NavOptions } from '../NavOptions';

export default function Header() {
  return (
    <>
      <S.HeaderContainer>
        <S.LeftSection>
          <Logo />
        </S.LeftSection>
        <S.CenterSection>
          <NavOptions />
        </S.CenterSection>
        <S.RightSection>
          <Navigation />
        </S.RightSection>
      </S.HeaderContainer>
      <SearchBar />
    </>
  );
}
