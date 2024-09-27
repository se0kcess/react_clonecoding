import * as S from './styles';
import Logo from '../Logo';
import Navigation from '../Navigation';
import SearchBar from '../SearchBar';
import UserMenu from '../UserMenu';

const Header = () => (
  <S.StyledHeader>
    <Logo />
    <Navigation />
    <SearchBar />
    <UserMenu />
  </S.StyledHeader>
);

export default Header;
