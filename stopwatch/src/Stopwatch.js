import React, { useState, useEffect } from 'react';

const CircleFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });  // Track mouse position

  // Update the position based on mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Circle style
  const circleStyle = {
    position: 'absolute',
    top: position.y - 25, // Adjust the circle's position (25px to center it)
    left: position.x - 25,
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'blue',
    pointerEvents: 'none',  // Prevents the circle from blocking mouse events
    transition: 'top 0.1s, left 0.1s'  // Smooth transition
  };

  return (
    <div>
      <div style={circleStyle}></div>
    </div>
  );
};

export default CircleFollower;
