import styled from 'styled-components';
import { Button } from 'ui';

const StyledButton = styled(Button)`
  background-color: green;
  color: white;
  font-size: 15px;
`;

export default function Root() {
  return (
    <>
      <section>mfe 1 is mounted!</section>
      <StyledButton>I should be green with 15px font</StyledButton>
    </>
  )
}
