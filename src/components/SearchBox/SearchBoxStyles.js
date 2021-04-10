import styled from 'styled-components';

export const StyledSearchBox = styled.div`
  display: block;
  margin-bottom: 10px;

  .search-icon-contaner{
    position:relative;

    span{
      position:absolute;
      left: 15px;
    }
  }

  input {
    padding: 8px 8px 8px 28px;
    border: 1px solid silver;
    display: block;
    border-radius: 0;
    width: 100%;
  }
`;
