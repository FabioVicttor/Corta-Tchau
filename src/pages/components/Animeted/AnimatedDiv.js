import React from "react";
import { useSpring, animated } from "react-spring";

// import { Login } from "../../../../services/Login/services";

export default function AnimetedDiv({children}) {

  // Card 3D
  const calc = (x, y) => [
    (y - window.innerHeight / 2) / 30,
    -(x - window.innerWidth / 2) / 40,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 500, friction: 40 },
  }));
  // Card 3D

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) =>
        set({ xys: calc(x, y) })
      }
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
      }}
    >
        {children}
    </animated.div>
  );
}
