
import './App.css';
import ButtonAppBar from './Components/ButtonAppBar';
import Copyright from './Components/Copyright';
import Footer from './Components/Footer';
import Recommendation from './Components/Recommendation';
import Search from './Components/Search';
import ShoppingList from './Components/ShoppingList';

function App() {
  return (
    <div className="App">
  <div>
    <ButtonAppBar/> 
  </div>
  <div>
    <Search/>
  </div>
  <div>
    <ShoppingList />
  </div>
  <div className="componentWrapper">
    <Recommendation />
  </div>
  <div>
    <Footer />
  </div>
  <div>
    <Copyright />
  </div>
</div>

  );
}

export default App;
