import React from 'react';
import Button, { ButtonType, ButtonSize} from './components/Button/button'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>button</Button>
        <Button btnType={ButtonType.Link} size={ButtonSize.Small} href="http://www.baidu.com">button</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
