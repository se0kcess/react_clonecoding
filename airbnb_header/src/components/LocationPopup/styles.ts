import styled from 'styled-components';

export const PopupContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border-radius: 32px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 8px 16px rgb(0 0 0 / 15%);
  padding: 40px;
  width: 500px;
  z-index: 1;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const RegionContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const RegionCard = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;

  &:hover {
    background-color: #f7f7f7;
  }
`;

export const RegionImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  margin-right: 16px;
`;

export const RegionName = styled.span`
  margin: 10px 0 20px 0;
  font-size: 14px;
`;

export const CountryList = styled.div`
  margin-top: 20px;
`;

export const CityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
`;

export const CityButton = styled.button`
  padding: 8px 16px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 30px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f7f7f7;
  }
`;
