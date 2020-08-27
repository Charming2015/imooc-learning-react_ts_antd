import React, { useState, useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../App'
// useRef 用处
// 1. useRef.current永远指向最终值
// 2. 可用作区分是mounted还是update
// 3. 绑定dom
const LikeButton: React.FC = () => {
  const theme = useContext(ThemeContext)
  const style = {
    background: theme.background,
    color: theme.color
  }
  // const [ obj, setObj] = useState({
  //   like:0, on: true
  // })
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)
  // useEffect(() => { // 不需要清除的，没有副作用的
  //   document.title = `点击了${like}次`
  // })
  // 优化更新，只有like变化时才执行useEffect
  useEffect(() => { // 不需要清除的，没有副作用的
    document.title = `点击了${like}次`
  }, [like])

  // useRef
  const likeRef = useRef(0) // 指向最终值
  const didMountRef = useRef(false)
  useEffect(() => {
    if (didMountRef.current) {
      console.log('this is updated')
    } else {
      didMountRef.current = true
    }
  })
  // 指向dom
  const domRef = useRef<HTMLInputElement>(null)

  return (
    <div >
      <input type="text" ref={domRef}/>
      {/* <button onClick={() => { setObj({ like: obj.like + 1, on: obj.on }) }}>
        {obj.like} 🐶
      </button>
      <button onClick={() => { setObj({ like: obj.like, on: !obj.on }) }}>
        {obj.on ? 'ON' : 'OFF'}
      </button> */}
      <button style={style} onClick={() => { setLike(like + 1); likeRef.current += 1 }}>
        {like} 🐶
      </button>
      <button onClick={() => { setOn(!on) }}>
      {on ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default LikeButton;