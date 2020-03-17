import React from 'react';

const App = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))
  return (
  <div>
    Hi
  </div>
  );
}

export default App;

