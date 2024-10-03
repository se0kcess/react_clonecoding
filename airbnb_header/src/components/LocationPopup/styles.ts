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
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const RegionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const RegionCard = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;

  &:hover {
    background-color: #f7f7f7;
  }
`;

export const RegionImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin-right: 16px;
`;

export const RegionName = styled.span`
  font-size: 14px;
`;

export const CountryList = styled.div`
  margin-top: 20px;
`;

export const CountryItem = styled.div`
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: #f7f7f7;
  }
`;
