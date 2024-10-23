import { useState, useEffect } from "react";
import './Animate.css'

import basketball from '../../assets/Bas.jpg'
import football from '../../assets/football.png'
import volleyball from '../../assets/Volleyball.jpg'
import human from '../../assets/human.jpg'
import cartoon from '../../assets/cartoon.jpeg'
import logo from '../../assets/logo.png'

const fieldWidth = 700;
const fieldHeight = 400;
const diameter = 80;
const maxLeft = fieldWidth - diameter - 2;
const maxTop = fieldHeight - diameter - 2;
const vx = 5;
const vy = 5;

function Animate() {
  const [running, setRunning] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [deg, setDeg] = useState(0);
  const [image, setImage] = useState(null);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);

  const toggleRunning = () => setRunning(!running);

  const resetActive = () => setImage(null);

  const changeImage = (type) => {
    resetActive();
    const images = {
      basketball,
      football,
      volleyball,
      human,
      cartoon,
      logo,
    };
    setImage(images[type] || null);
  };

  const calculatePosition = () => {
    setX((prevX) => {
      let newX = goRight ? prevX + vx : prevX - vx;
      if (newX >= maxLeft || newX <= 0) {
        setGoRight(!goRight);
        // เปลี่ยนทิศทางการหมุนเมื่อชนกับขอบ
        setDeg((prevDeg) => prevDeg + 180);
        newX = Math.max(0, Math.min(newX, maxLeft)); 
      }
      return newX;
    });

    setY((prevY) => {
      let newY = goDown ? prevY + vy : prevY - vy;
      if (newY >= maxTop || newY <= 0) {
        setGoDown(!goDown);
        // เปลี่ยนทิศทางการหมุนเมื่อชนกับขอบ
        setDeg((prevDeg) => prevDeg + 180);
        newY = Math.max(0, Math.min(newY, maxTop));
      }
      return newY;
    });

    // ปรับ deg ให้หมุนไปเรื่อยๆ
    setDeg((prevDeg) => prevDeg + 5); 
  };

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(calculatePosition, 16.6);
    }
    return () => clearInterval(interval);
  }, [running, goRight, goDown]);

  return (
    <div id="container">
      <div id="field" style={{ width: fieldWidth, height: fieldHeight }}>
        <div
          id="ball"
          className="ball"
          style={{
            left: x,
            top: y,
            transform: `rotate(${deg}deg)`,
            backgroundImage: image ? `url(${image})` : "none",
          }}
        ></div>
      </div>
      <div id="control">
        <button className={`btn ${running ? "btn-danger" : "btn-success"}`} onClick={toggleRunning}>
          <i className={running ? "bi bi-pause" : "bi bi-play"}></i> {running ? "Stop" : "Run"}
        </button>
        <button className="btn btn-outline-primary" onClick={() => changeImage(null)}>
          None
        </button>
        {["basketball", "football", "volleyball", "human", "cartoon", "logo"].map((type) => (
          <button
            key={type}
            className="btn btn-outline-secondary"
            onClick={() => changeImage(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Animate;