import { useState, useCallback } from 'react'
import logo from './logo.svg'
import './App.css'
import { ChildArea } from '../ChildArea';
import { InlineStyle } from './components/inlineStyle';
import { StyledJsx } from './components/StyledJsx';
import { StyledConponents } from './components/StyledComponents';
import { Emotion } from './components/Emotion';
//viteがsassに非対応のため
// import { CssModules} from './components/CssModules.jsx';

function App() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = () => useCallback(setOpen(false), []);

  return (
    
    <div className="App">
      {/* React基本 */}
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>{open ? '非表示する' : '表示する'}</button>
      <ChildArea open={open} text={text} onClickClose={onClickClose} />

      {/* CSS in JS */}
      <InlineStyle /> 
      <StyledJsx />
      <StyledConponents />
      <Emotion />
    </div>

  )
}

export default App
