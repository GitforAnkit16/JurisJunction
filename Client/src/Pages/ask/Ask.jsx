import React, { useState } from 'react';
import "./Ask.css";

function Ask() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handlePayment = () => {
    alert("Money transaction successful!");
  };

  return (
    <>
      <div className='ask'>
        <h1>Having any legal troubles?</h1>
      </div>
      <div className="con">
        <div className={`cardw ${selectedOption === 'chat' ? 'selected' : ''}`} onClick={() => handleOptionSelect('chat')}>
          <a href="http://"><i className="fa-solid fa-comments"></i></a>
          <p>Chat with Expert</p>
        </div>
        <div className={`cardw ${selectedOption === 'call' ? 'selected' : ''}`} onClick={() => handleOptionSelect('call')}>
          <a href="http://"><i className="fa-solid fa-phone"></i></a>
          <p>Call with Expert</p>
        </div>
        <button onClick={handlePayment}>Pay Now</button>
      </div>
    </>
  );
}

export default Ask;
