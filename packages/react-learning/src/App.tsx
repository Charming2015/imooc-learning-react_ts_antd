import React from 'react';
import './App.css';
// import useURLLoader from './hooks/useURLLoader'
import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
// import MouseTracker from './components/MouseTracker'
// import useMousePosition from './hooks/useMousePosition'
// import withLoader from './HOC/WithLoader'
// interface IShowResult {
//   message: string;
//   status: string;
// }
// const DogShow: React.FC<{data: IShowResult}> = ({data}) => {
//   return (
//     <>
//       <h2>Dog show: {data.status}</h2>
//       <img style={{width: 500, height: 300}} src={data.message} alt="dog img"/>
//     </>
//   )
// }
interface IThemeProps {
  [key: string]: { color: string; background: string; }
}

const themes: IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee'
  },
  'dark': {
    color: '#fff',
    background: '#222'
  }
}
export const ThemeContext = React.createContext(themes.light)
function App() {
  // const pos = useMousePosition()
  // const WrapperDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
  // const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random')
  // const dogResult = data as IShowResult
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.light}>
      <header className="App-header">
        <h2>home</h2>
        <Hello />
        {/* <h2>{ loading ? '读取中' : '显示中' }</h2>
        <img style={{width: 500, height: 300}} src={dogResult && dogResult.message} alt="dog img"/> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Hello/>
        <LikeButton /> */}
        <LikeButton />
        {/* <WrapperDogShow /> */}
        {/* <MouseTracker/>
        <p>X: {pos.x}, Y: {pos.y}</p> */}
      </header>
      </ThemeContext.Provider>
    </div> 
  );
}

export default App;
