import React, { useState } from "react";

const Transport = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div onClick={toggleMenu}>Toggle Menu</div>
      <div isOpen={isOpen}>
        <div>Railway</div>
        <div>Option 2</div>
        <div>Option 3</div>
      </div>
    </div>
  );
};

export default Transport;
