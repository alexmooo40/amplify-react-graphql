import logo from './logo.svg';
import './App.css';

function MyButton()
{
  function MyButton_onclic(e){
    alert("you clic me :') ");
    alert(e);
  }
  return (<button onClick={MyButton_onclic}> clic me</button>);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyButton></MyButton>
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
