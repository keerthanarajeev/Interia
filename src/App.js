import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Link, Route, Routes } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Consultation from './navigation/Consultation';
import Modal from 'react-modal';
import Modalex from './Modal';


function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
       
        

           <Route exact path='/' element={<Home /> }></Route>
           <Route exact  path='/home' element={<Consultation/> }></Route>

      
           
      </Routes>


      


      <Footer />


    </div>
  );
}

export default App;
