import './App.css';
import HelloComponent from './components/Hello';
import Role from './components/Role';
import ShowHide from './components/ShowHide';
import Variant from './components/Variant';
import Event from './components/Event';
import Axios from './components/Axios';

function App() {
  return (
    <div className="App">
      <HelloComponent/>
      <ShowHide/>
      <Role/>
      <Variant/>
      <Event/>
      <Axios/>
    </div>
  );
}

export default App;
