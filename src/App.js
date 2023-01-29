import './App.css';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <section className='top'>
        <h3 id="title">Emoji Search</h3>
        <input></input>
      </section>
      <section className='mid'>
        <List/>
      </section>
    </div>
  );
}

export default App;

