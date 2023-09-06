import React, { useState } from 'react';

function ButtonOnOff() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={handleClick}>{isOn ? 'OFF' : 'ON'}</button>
    </div>
  );
}

export default ButtonOnOff;
