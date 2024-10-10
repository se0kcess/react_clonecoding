import Logo from '../Logo';
import Navigation from '../Navigation';
import * as S from './styles';
import SearchSection from '../SearchSection';

export default function Header() {
  return (
    <>
      <S.HeaderContainer>
        <S.LeftSection>
          <Logo />
        </S.LeftSection>
        <S.CenterSection>
          <SearchSection />
        </S.CenterSection>
        <S.RightSection>
          <Navigation />
        </S.RightSection>
      </S.HeaderContainer>
    </>
  );
}
