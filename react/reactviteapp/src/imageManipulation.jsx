import React, { useState } from 'react';
import cat from './feast.png';
import './imgman.css';

function ImageManipulation() {
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(200);
  const [angle, setAngle] = useState(30);
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);

  // Function to enhance height
  function enhanceHeight() {
    setHeight(height + 20);
  }

  // Function to enhance width
  function enhanceWidth() {
    setWidth(width + 20);
  }

  // Function to rotate image
  function doRotate() {
    setAngle(angle + 30);
  }

  // Function to change background color randomly
  function changeColor() {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
  }

  return (
    <div className="container">
      {/* Image Container */}
      <div
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          marginTop: '70px',
          marginLeft: '200px',
          height: '200px',
          width: '200px',
          border: '2px solid red',
        }}
      >
        <img
          src={cat}
          height={height}
          width={width}
          style={{ transform: `rotate(${angle}deg)` }}
          alt="cat"
        />
      </div>

      {/* Button Controls */}
      <div
        style={{
          border: '2px solid red',
          marginTop: '100px',
          padding: '10px 60px',
          textAlign: 'center',
        }}
      >
        <button
          onClick={enhanceHeight}
          style={{ backgroundColor: 'cyan', color: 'red', marginRight: '15px' }}
        >
          Enhance Height
        </button>
        <button
          onClick={enhanceWidth}
          style={{ backgroundColor: 'cyan', color: 'red', marginRight: '15px' }}
        >
          Enhance Width
        </button>
        <button
          onClick={changeColor}
          style={{ backgroundColor: 'cyan', color: 'red', marginRight: '15px' }}
        >
          Color Change
        </button>
        <button
          onClick={doRotate}
          style={{ backgroundColor: 'cyan', color: 'red' }}
        >
          Rotate
        </button>
      </div>
    </div>
  );
}

export default ImageManipulation;
