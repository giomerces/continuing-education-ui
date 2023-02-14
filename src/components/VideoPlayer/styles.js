import styled from "styled-components";

export const StyledDiv = styled.div`
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.grey.main};
  border-radius: ${({ theme }) => theme.spacing(1)};
  align-items: center;
  display: flex;
  max-height: 600px;
  display: flex;
  flex-direction: column;
`;
