import styled from 'styled-components';
import COLOR from 'utils/colorPalette';

export const StyledWeatherItem = styled.div`
  border: 1px dashed ${COLOR.GRAY_E1};
  width: 140px;
  height: 135px;
  text-align: center;
  margin: 0 7px;
  font-size: 14px;
`;

export const StyledDay = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const StyledLabel = styled.span`
  margin-right: 5px;
  font-size: 13px;
`;
export const StyledMinTemp = styled.div``;
export const StyledMaxTemp = styled.div``;
