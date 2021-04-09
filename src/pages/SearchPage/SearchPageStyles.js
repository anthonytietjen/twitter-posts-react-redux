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

    > div{
      flex-direction: column;
      flex: 1;
      margin-right: 15px;
    }
  }

  .mobile-view{
    display: flex;
    flex-direction: column;
  }
`;
