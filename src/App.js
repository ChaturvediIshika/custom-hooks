import React,{useState} from 'react';
import './App.css';
import Section from './components/Section';
import Toggle from './components/hooks/Toggle';

function App() {

  const [smileyface,isSmileyFace]= useState(true)
  // const [read,readMore]=useState(true)
  const [section,updateSection]=Toggle(true);

  return (
    <div>
      {section && <Section/>}

      <p><button style={{margin:'10px 500px'}} onClick={()=>updateSection(!section)}>readmore</button></p>

      <h1 style={{textAlign:'center'}} onClick={()=>isSmileyFace(!smileyface)}> {(smileyface)?'😃':'🥹'}</h1>
    </div>
  );
}

export default App;
