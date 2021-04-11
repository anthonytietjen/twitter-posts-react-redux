import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { filterApplied } from '../../actions/searchActions';
import { tweetsSelector } from '../../selectors/searchSelectors';

export const StyledHashTag = styled.div`
  border-radius: 16px;
  color: #3C7DB7;
  background-color: #E7F3FA;
  cursor: pointer;
  display: inline-block;
  padding: 12px 12px;
  justify-content: center;
  font-size: .7em;
  line-height: .7em;
  margin-right: 10px;
  margin-bottom: 10px;

  :hover{
    opacity: .8;
  }
`;

export const HashTag = ({ text }) => {
  const { tweets } = useSelector(tweetsSelector);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(filterApplied(tweets, text));
  };

  return (
    <StyledHashTag
      data-testid={`text_${text}`}
      onClick={handleClick}
    >
      {'#'}
      {text}
    </StyledHashTag>
  );
};
