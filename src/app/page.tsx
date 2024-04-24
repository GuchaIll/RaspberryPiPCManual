// pages/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';

import Book from './components/Book';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className = "font-bold text-4xl ml-4 mb-4">Guide to building a Raspberry Pi PC</h1>
      <Book />
    </div>
  );

};

//ReactDOM.render(
  ////<React.StrictMode>
   // <FlipBookComponent />
  //</React.StrictMode>,
 // document.getElementById('root')
//);

export default HomePage;