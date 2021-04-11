import { useDispatch, useSelector } from 'react-redux';
import { filterApplied } from '../../actions/searchActions';
import { tweetsSelector } from '../../selectors/searchSelectors';
import { StyledHashTag } from './HashTagStyles';

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
