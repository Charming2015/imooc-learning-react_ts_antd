import React, { useState, useEffect } from 'react';

// useEffect
// 每次更新都调用回调函数的东西
// 返回的函数会在摧毁前调用
// useEffect的第二个参数表示依赖的数据，数据更新就调用useEffect
const MouseTracker: React.FC = () => {
  const [pos, setPos] = useState({x: 0, y: 0})
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      console.log('inner')
      setPos({
        x: e.clientX,
        y: e.clientY
      })
    }
    document.addEventListener('click', updateMouse)
    return () => {
      document.removeEventListener('click', updateMouse)
    }
  }, [])
  return (
    <div>
      X: {pos.x}, Y: {pos.y}
    </div>
  );
};

export default MouseTracker;