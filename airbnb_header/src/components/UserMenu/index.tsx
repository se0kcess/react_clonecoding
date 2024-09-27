import * as S from './styles';

const UserMenu = () => (
  <S.StyledUserMenu>
    <S.LanguageButton>🌐</S.LanguageButton>
    <S.UserButton>
      <span>☰</span>
      <span>👤</span>
    </S.UserButton>
  </S.StyledUserMenu>
);

export default UserMenu;
