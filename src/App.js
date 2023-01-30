import { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';

function App() {
  const[term, setTerm]=useState('');


  return (
    <div className="App">
      <section className='top'>
        <h3 id="title">Emoji Search</h3>
        <input onChange={(e)=>setTerm(e.target.value)}></input>
      </section>
      <section className='mid'>
        <List term={term}/>
      </section>
    </div>
  );
}

export default App;

