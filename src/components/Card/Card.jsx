import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: #fff;  
  box-shadow: 0 0 4px #333;
  padding: 10px;
`;

export const Card = ({ children }) => (
  <StyledCard>
    {children}
  </StyledCard>
);
