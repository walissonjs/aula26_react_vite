import './App.css';
import { Header } from "./Components/Header"; // também poderia ficar entre aspas simples
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Header brand='Geração Tech' description='Bezerra de Menezes'>
          <a href="#equipe">Equipe</a>
          <a href="#aprendizado">Aprendizado</a>
      </Header>
      {/* Aplicando um container para "centralizar" o nosso conteúdo */}
        
        <main className='container'>
          <Home/>
        </main>
      
      <h4> Ok! Operando normal.</h4>
    </>
  );
}

export default App;
