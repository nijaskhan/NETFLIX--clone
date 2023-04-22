import Navbar from './components/Navbar/Navbar';
import RowPost from './components/RowPost/RowPost';
import Banner from './components/banner/banner';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner />
      <RowPost />
    </div>
  );
}

export default App;
