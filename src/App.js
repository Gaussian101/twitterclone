import React from 'react';
import './App.css';

function App() {
  return (
    <div className = "screen">
      {renderColumns(0)}
      {renderColumns(1)}
      {renderColumns(2)}
    </div>
   
  );
}

function renderColumns(col) {
  return(
    <Column 
      num = {col} />
  )
}

function Column(props) {
  let isPosition = (props.num === 0) ? "nav end" : (props.num === 1) ? "middle" : "right end";
  return (
    <div className = {isPosition}>
      Hello
    </div>
  )
}

export default App;
