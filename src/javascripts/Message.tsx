import * as React from 'react';
const Message: React.FC<{message: string}> = ({message}) => {
  // const { message } = props;
  return (
    <div style={{backgroundColor: 'green', color: 'white'}}>
      {message}
    </div>
  );
}
export default Message;
