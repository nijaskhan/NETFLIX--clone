import Navbar from './components/Navbar/Navbar';
import RowPost from './components/RowPost/RowPost';
import Banner from './components/banner/banner';
import {ACTION_URL, ORIGINALS_URL, THRILLER_URL, COMEDY_URL, FANTASY_URL} from './constants/constants'
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost title="originals" url={ORIGINALS_URL} />
      <RowPost  title="Action" isSmall url={ACTION_URL} />
      <RowPost  title="Thriller" isSmall url={THRILLER_URL} />
      <RowPost  title="Comedy" isSmall url={COMEDY_URL} />
      <RowPost  title="Horror" isSmall url={FANTASY_URL} />
    </div>
  );
}

export default App;
