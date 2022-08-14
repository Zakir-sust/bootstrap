import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './components/home';
import Grid from './components/grid';
import Texts from './components/Texts';
import Table from './components/Table';
import Formx from './components/Formx';
import FormExample from './components/FormExample';
import FormGrid from './components/FormGrid';
import TForm from './pages/TForm';
import Others from './pages/Others';
import Components from './pages/Components';
function App() {
  return (
    // <BrowserRouter>

      <div className="App">
        <p>Hello world</p>
       

        <Routes>
          <Route path = '/' element = {<Others/>}></Route>
          <Route path = '/about' element = {<App/>}></Route>
          <Route path = '/home' element = {<Home/>}></Route>
          <Route path = '/form' element = {<TForm/>}></Route>
          <Route path = '/others' element = {<Others/>}></Route>
          <Route path = 'components' element = {<Components/>}></Route>
        </Routes>
      </div>
      
    // </BrowserRouter>
  );
}

export default App;
