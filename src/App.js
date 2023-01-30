import { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';

function App() {
  const[term, setTerm]=useState('');
  const[on,setOn]=useState(true);

  return (
    <div className="App">
      <section className='top'>
        <h3 id="title">Emoji Search</h3>
        <input onChange={(e)=>setTerm(e.target.value)}></input>
        {on?<>
          <div className='pop'>
            <div className='content'>
              <h5>Emoji Copied!</h5>
              <button onClick={()=>setOn(!on)}>OK</button>
            </div>
          </div></>:<></>
        }
      </section>
      <section className='mid' onClick={()=>setOn(!on)}>
        <List term={term}/>
      </section>
    </div>
  );
}

export default App;

