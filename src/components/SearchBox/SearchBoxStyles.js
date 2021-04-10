import styled from 'styled-components';

export const StyledSearchBox = styled.div`
  display: block;
  margin-bottom: 10px;

  .search-icon-contaner{
    position:relative;

    svg{
      position:absolute;
      top: 8px;
      left: 10px;
      color: #999;
    }
  }

  input {
    padding: 8px 8px 8px 32px;
    border: 1px solid silver;
    display: block;
    border-radius: 0;
    width: 100%;
  }
`;
