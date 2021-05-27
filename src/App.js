import './App.css';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import DynamicFullTable from './components/dynamicfull.js';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Footer className="footer" />
    <DynamicFullTable />
    </div>
  );
}

export default App;
