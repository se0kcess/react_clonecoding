import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBars, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons'; // 추가된 부분
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  size?: 'sm' | 'lg' | '2x' | '3x';
}

export const GlobeIcon = ({ size }: IconProps) => <FontAwesomeIcon icon={faGlobe as IconProp} size={size} />;
export const MenuIcon = ({ size }: IconProps) => <FontAwesomeIcon icon={faBars as IconProp} size={size} />;
export const UserIcon = ({ size }: IconProps) => <FontAwesomeIcon icon={faUser as IconProp} size={size} />;
export const SearchIcon = ({ size }: IconProps) => <FontAwesomeIcon icon={faSearch as IconProp} size={size} />;
export const AirbnbIcon = ({ size }: IconProps) => <FontAwesomeIcon icon={faAirbnb as IconProp} size={size} />;
