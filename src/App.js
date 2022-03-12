import logo from './logo.svg';
import './App.css';
import './style.css';
import Navbar from './components/navbar';
import SearchBar from './components/searchBar';
import PostList from './components/postList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <div className="cont-princ">
        <div id="cards" className="row align-center">
          <PostList />
        </div>
      </div>
    </div>
  );
}

export default App;
