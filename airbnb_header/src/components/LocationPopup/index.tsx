import * as S from './styles';

interface LocationPopupProps {
  onClose: () => void;
}

export const LocationPopup = ({ onClose }: LocationPopupProps) => {
  const cities = ['서울', '부산', '속초', '강릉', '전주', '대구', '경주', '여수', '서귀포', '대전', '제주도', '인천'];

  return (
    <S.PopupContainer>
      <S.Title>지역으로 검색하기</S.Title>
      <S.RegionContainer>
        <S.RegionCard>
          <S.RegionImage src='/img/global.jpg' alt='유연한 검색' />
          <S.RegionName>유연한 검색</S.RegionName>
        </S.RegionCard>
        <S.RegionCard>
          <S.RegionImage src='/img/europe.webp' alt='유럽' />
          <S.RegionName>유럽</S.RegionName>
        </S.RegionCard>
        <S.RegionCard>
          <S.RegionImage src='/img/japan.webp' alt='일본' />
          <S.RegionName>일본</S.RegionName>
        </S.RegionCard>
        <S.RegionCard>
          <S.RegionImage src='/img/eastSouthAsia.webp' alt='동남아시아' />
          <S.RegionName>동남아시아</S.RegionName>
        </S.RegionCard>
      </S.RegionContainer>
      <S.CountryList>
        <S.Title>한국</S.Title>
        <S.CityGrid>
          {cities.map((city, index) => (
            <S.CityButton key={index}>{city}</S.CityButton>
          ))}
        </S.CityGrid>
      </S.CountryList>
    </S.PopupContainer>
  );
};
