// 自定义hooks
import { useState, useEffect } from 'react';
const useMousePosition = () => {
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
  return pos
}

export default useMousePosition;