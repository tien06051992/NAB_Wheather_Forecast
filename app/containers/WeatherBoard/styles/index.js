import styled from 'styled-components';
import COLOR from 'utils/colorPalette';

export const StyledWeatherBoard = styled.div`
  display: flex;
  border: 3px dashed ${COLOR.GRAY_A3};
  padding: 15px;
  min-height: 177px;
  justify-content: center;
  align-items: center;
`;
