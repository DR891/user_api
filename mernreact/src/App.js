import logo from './logo.svg';
import './App.css';
import Userlist from './components/Userlist'
import Createuser from './components/Createuser';
function App() {
  return (
    <div className="App">
      <Userlist />
      <Createuser />
    </div>
  );
}

export default App;
