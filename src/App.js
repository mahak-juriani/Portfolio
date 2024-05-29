import './App.css';
import NavBar from './components/NavBar.js';
import TypeWriter from './components/Typewriter.js';
import About from './components/About.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <div className="static-container">
          <h1 className="nameElement">Mahak Juriani</h1>
          <TypeWriter
            text={[
              "Hello, I'm Mahak Juriani.",
              "I'm a Software Developer.",
              "This is my portfolio."
            ]}
            typingSpeed={100}
            deletingSpeed={50}
            duration={1000}
          />
        </div>
      </header>
        <About />
    </div>
  );
}

export default App;