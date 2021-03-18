import './App.css';
import Convert from './components/Convert';

function App() {
  return (
    <div className='App'>
      <h1>Conversor de moedas</h1>
      <div className='row'>
        <Convert money='USD' tomoney='BRL'></Convert>
        <Convert money='BRL' tomoney='USD'></Convert>
      </div>
      <div className='row'>
        <Convert money='CAD' tomoney='BRL'></Convert>
        <Convert money='BRL' tomoney='CAD'></Convert>
      </div>
      <div className='row'>
        <Convert money='SEK' tomoney='BRL'></Convert>
        <Convert money='BRL' tomoney='SEK'></Convert>
      </div>
    </div>
  );
}

export default App;
