import './App.css';
import { Balance } from 'components/Balance';
import { Chart } from 'compponents/Chart';

function App() {
  return (
    <section className="app">
      <div className='app__container'>
          <Balance />
          <Chart />
      </div>
    </section>
  );
}

export default App;
