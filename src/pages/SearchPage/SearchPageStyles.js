import styled from 'styled-components';
import { maxWidth } from '../../utils/utils';

export const StyledSearchPage = styled.div`
  .desktop {
    max-width: ${maxWidth}px;
    padding: 30px 0;
    margin: auto;
  }

  .desktop-view{
    display: flex;
    flex-direction: row;

    .left-column{
      flex-direction: column;
      margin-right: 20px;
      flex: 1;
    }

    .right-column{
      width: 250px;
    }
  }

  .mobile-view{
    display: flex;
    flex-direction: column;
  }
`;
