import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import { Footer } from './components/Footer';
import About from './components/About';
import Todos from './components/Todos';

function App() {
  return (
    <>
 <Header title="My Todo List"/>
 <Todos
 
 />
    {/* <About/> */}
 {/*destructured props used in footer */}
 <Footer name="Abhishek Singh"/> 
    </>
  );
}

export default App;
