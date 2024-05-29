import NavBar from './components/NavBar.js';
import './App.css';
import logo from './logo.svg'
import Typewriter from './components/Typewriter.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar />
        <Typewriter 
            text = {
              ["Hello, welocme to the typing effect demo!",
                "Enjoy exploring this cool effect.",
                "This is an example of typing and deleting text."
              ]
            }
            typingSpeed = {100}
            deletingSpeed = {50}
        />
      </header>
    </div>

  );
}

export default App;
