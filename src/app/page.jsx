"use client"
import React, { useState } from 'react';

const HomePage = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>This is Next Js App</h2>

      <h2>Counter {counter}</h2>

      <button className='btn btn-primary mr-2' onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
      <button className='btn btn-primary' onClick={() => setCounter(counter - 1)}>
        Decrease
      </button>
    </div>
  );
};

export default HomePage;
