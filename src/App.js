import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Sistema web en construcción.
          </p>
          <a
            className="App-link"
            href="https://jonadavid-webdesign.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sigan viendo
          </a>
        <button name='boton' className='btn btn-secondary disabled mt-4'>Botón desactivado</button>
        </header>
      </div>
    </>
  );
}

export default App;
