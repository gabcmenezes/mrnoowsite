import logo from './logo.svg';
import './App.css';
import './components/BoasVindas'
import './components/SayMyName'
import BoasVindas from './components/BoasVindas';
import NomeUsuario from './components/NomeUsuario';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Gabriel"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <SayMyName nome={nome}/>
        </p>

        <p>
          <Pessoa
          nome="Gabriel"
          idade="24"
          profissao="Guitarrista"
          foto="https://via.placeholder.com/150"
          />
        </p>

      </header>
    </div>
  );
}

export default App;
