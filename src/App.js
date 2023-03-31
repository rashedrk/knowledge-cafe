import './App.css';
import Blogs from './components/Blogs/Blogs';
import Navbar from './components/Navbar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
