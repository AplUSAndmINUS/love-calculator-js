import React from 'react';

export const MyApp = () => {
  // Variables
  let name1: any = '';
  let name2: any = '';

  // Percentage from Math.round()
  let n = 0;
  n = Math.round(n * 100);

  const getCompatibility = () => {
    // Get names
    name1 = prompt('Enter your name:', 'John');
    name2 = prompt('Enter the name of your partner:', 'Jessica');

    // Display compatibility
    alert(`The couple ${name1} and ${name2}'s compatibility is: ${n}%`);
  }

  return (
    <>
      <h1>My App</h1>
      { getCompatibility() }
    </>
  )
}

export default MyApp;