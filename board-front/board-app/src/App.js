import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import ListBoardComponent from './components/ListBoardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div className="container">
          <switch>
            <Route path="/" exact component = {ListBoardComponent}></Route>
            <Route path="/board" component = {ListBoardComponent}></Route>
          </switch>
        </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
