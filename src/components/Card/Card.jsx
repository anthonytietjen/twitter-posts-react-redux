import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: #fff;  
  box-shadow: 1px 1px 3px #aaa;
  border-radius: 2px;
`;

export const Card = ({ children }) => (
  <StyledCard>
    {children}
  </StyledCard>
);
