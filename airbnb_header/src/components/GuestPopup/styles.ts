import styled from 'styled-components';

export const PopupContainer = styled.div`
  background-color: white;
  border-radius: 32px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 04%), 0 8px 16px rgb(0 0 0 / 15%);
  padding: 24px;
  width: 300px;
`;

export const GuestType = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const GuestInfo = styled.div`
  flex-grow: 1;
`;

export const GuestTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

export const GuestSubtitle = styled.p`
  font-size: 14px;
  color: #717171;
  margin: 4px 0 0;
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CounterButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #b0b0b0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const CounterValue = styled.span`
  margin: 0 16px;
  font-size: 16px;
  min-width: 20px;
  text-align: center;
`;
