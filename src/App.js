import './App.css';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';
import SideBar from './components/dashboard/sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main'>
        <SideBar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
