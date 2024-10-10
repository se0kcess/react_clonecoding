import { AirbnbIcon } from '../../assets/Icons/Icons';
import * as S from './styles';

const Logo = () => (
  <S.LogoWrapper>
    <AirbnbIcon size='lg' />
    <S.LogoText>airbnb</S.LogoText>
  </S.LogoWrapper>
);

export default Logo;
