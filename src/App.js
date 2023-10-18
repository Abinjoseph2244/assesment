import './App.css';
import Charts from './components/Charts';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="flex bg-[#f5f6f8]">
      <Sidebar />
    <main className="flex-grow ml-64 relative">
          <Navbar/>
          <Charts/>  
    </main>
    </div>
  );
}

export default App;
