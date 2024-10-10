import { GlobeIcon, MenuIcon, UserIcon } from '../../assets/Icons/Icons';
import * as S from './styles';

const Navigation = () => (
  <S.NavContainer>
    <S.NavItem href='#'>당신의 공간을 에어비앤비하세요</S.NavItem>
    <S.NavItem href='#'>
      <GlobeIcon size='lg' />
    </S.NavItem>
    <S.UserMenuButton>
      <MenuIcon size='lg' />
      <S.UserIconWrapper>
        <UserIcon />
      </S.UserIconWrapper>
    </S.UserMenuButton>
  </S.NavContainer>
);

export default Navigation;
