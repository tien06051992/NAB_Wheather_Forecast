import styled from 'styled-components';
import Select from 'components/Select';
import COLOR from 'utils/colorPalette';

export const StyledSection = styled.section`
  margin: 3em auto;

  &:first-child {
    margin-top: 0;
  }
`;

export const StyledSelect = styled(Select)`
  width: 300px;
  margin-right: 15px;
`;

export const StyledErrorMessage = styled.span`
  color: ${COLOR.ERROR};
  font-size: 14px;
`;
export const StyledSelectWrapper = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;
