import styled from 'styled-components';

export const StyledHashTag = styled.div`
  border-radius: 16px;
  color: blue;
  background-color: skyblue;
  cursor: pointer;
  display: inline-block;
  padding: 12px 12px;
  justify-content: center;
  font-size: .7em;
  line-height: .7em;

  :hover{
    opacity: .8;
  }
`;

export const HashTag = ({ text }) => (
  <StyledHashTag
    data-testid="text_hashtag"
  >
    {text}
  </StyledHashTag>
);
