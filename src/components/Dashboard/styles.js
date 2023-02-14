import styled from "styled-components";

export const StyledDiv = styled.div`
  display: grid;
  margin: ${({ theme }) => theme.spacing(5)};
  grid-template-columns: 1fr 5fr;
  column-gap: ${({ theme }) => theme.spacing(5)};
  max-height: 600px;
  overflow: auto;
`;
