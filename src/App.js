import './App.css';
import Blog from './components/Blog/Blog';
import Navbar from './components/Navbar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Blog></Blog>
    </div>
  );
}

export default App;
