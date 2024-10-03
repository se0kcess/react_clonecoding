import * as S from './styles';

interface LocationPopupProps {
  onClose: () => void;
}

export const LocationPopup = ({ onClose }: LocationPopupProps) => {
  return (
    <S.PopupContainer>
      <S.Title>지역으로 검색하기</S.Title>
      <S.RegionGrid>
        <S.RegionCard>
          <S.RegionImage src='../../assets/img/global.jpg' alt='유연한 검색' />
          <S.RegionName>유연한 검색</S.RegionName>
        </S.RegionCard>
        <S.RegionCard>
          <S.RegionImage src='../../assets/img/europe.webp' alt='유럽' />
          <S.RegionName>유럽</S.RegionName>
        </S.RegionCard>
        <S.RegionCard>
          <S.RegionImage src='../../assets/img/japan.webp' alt='일본' />
          <S.RegionName>일본</S.RegionName>
        </S.RegionCard>
        <S.RegionCard>
          <S.RegionImage src='../../assets/img/eastSouthAsia.webp' alt='동남아시아' />
          <S.RegionName>동남아시아</S.RegionName>
        </S.RegionCard>
      </S.RegionGrid>
      <S.CountryList>
        <S.CountryItem>한국</S.CountryItem>
      </S.CountryList>
    </S.PopupContainer>
  );
};
