import styled from 'styled-components';
import { maxWidth } from '../../utils/utils';

export const StyledSearchPage = styled.div`
  padding: 30px 0 60px 0;

  h1{
    font-size: 1em; 
  }

  .desktop {
    max-width: ${maxWidth}px;
    margin: auto; 

    h1{
      margin: 0 0 10px 0; 
    }
  }

  .mobile {
    h1{
      margin: 0 0 10px 15px; 
    }
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
