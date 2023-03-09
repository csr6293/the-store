import './App.css';
import Dashboard from './components/dashboard';
import SideBar from './components/dashboard/sidebar';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <SideBar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
