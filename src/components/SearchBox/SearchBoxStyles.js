import styled from 'styled-components';
import { maxWidth } from '../../utils/utils';

export const StyledSearchBox = styled.div`
  display: block;
  margin-bottom: 20px;

  @media (max-width: ${maxWidth - 1}px) {
    padding: 0 15px;
  }

  .search-icon-contaner {
    position:relative;

    svg {
      position:absolute;
      top: 14px;
      left: 12px;
      color: #BCC2C5;
    }
  }

  input {
    padding: 14px 8px 13px 36px;
    border: 1px solid #BCC2C5;
    display: block;
    border-radius: 0;
    width: 100%;
  }
`;
