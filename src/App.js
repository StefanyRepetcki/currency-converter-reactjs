import Convert from './components/Convert';
import Menu from './components/Menu';

function App() {
  return (
    <div className='App'>
      <Menu></Menu>
      <h4 className="text-white mt-4">Conversor de moedas</h4>
      <div className="container">
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
    </div>
  );
}

export default App;
