import * as React from 'react';
import styled from 'styled-components'

const CssContainer = styled.div`
background-color: green;
color: white;
padding: 1em;
`;
const Message: React.FC<{message: string}> = ({message}) => {
  // const { message } = props;
  return (
    <CssContainer>
      {message}
    </CssContainer>
  );
}
export default Message;
