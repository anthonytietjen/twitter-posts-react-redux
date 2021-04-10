import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: #fff;  
  box-shadow: 1px 1px 4px #aaa;
  border-radius: 4px;
`;

export const Card = ({ children }) => (
  <StyledCard>
    {children}
  </StyledCard>
);
