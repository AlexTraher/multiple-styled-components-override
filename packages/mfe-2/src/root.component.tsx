import styled from 'styled-components';
import { Button } from 'ui';


const StyledButton = styled(Button)`
  background-color: green;
  color: white;
`;

export default function Root() {
  return (
    <>
      <section>mfe 2 is mounted!</section>
      <StyledButton>I should be green with default font-size</StyledButton>
    </>
  )
}
