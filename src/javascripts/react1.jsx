import React from 'react';
import ReactDOM from 'react-dom';
const App2 = () => {
const App = (props) => {
  return(
    <div>
      <h1 style={{color:'#adc'}}>
        <s>Hello React!</s>
      </h1>
    </div>
  );
};

const root = document.getElementById('root');

if(root) {
  ReactDOM.render(<App/>,root);
} else {
  console.log('No root.')
}

}
export default App2;
