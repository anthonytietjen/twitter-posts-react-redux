import styled from 'styled-components';

export const StyledSearchPage = styled.div`
  .desktop {
    max-width: 768px;
    padding-top: 15px;
    margin: auto;
  }

  .desktop-view{
    display: flex;
    flex-direction: row;

    .left-column{
      flex-direction: column;
      margin-right: 15px;
      flex: 1;
    }

    .right-column{
      min-width: 250px;
    }
  }

  .mobile-view{
    display: flex;
    flex-direction: column;
  }
`;
