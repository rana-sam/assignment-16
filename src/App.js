import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import Header from './header/Header';
import Mainpage from './mainpage/Mainpage';

function App() {
  return (
    <div className="App">
     <Header/>
     <Mainpage/>
    </div>
  );
}

export default App;
