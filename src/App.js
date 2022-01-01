//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SimpleBottomNavigation from './components/MainNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Popular from './Pages/Popular';
import Latest from './Pages/Latest';
import Upcoming from './Pages/Upcoming';
import Toprated from './Pages/Toprated';
import ImgSlider from './components/ImgSlider';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="app">
      <ImgSlider/>
      <Container>
       <Routes>
         <Route path='/' element={<Toprated/>} exact />
         <Route path='/Popular' element={<Popular/>} exact />
         <Route path='/Latest' element={<Latest/>} />
         <Route path='/Upcoming' element={<Upcoming/>} />
       </Routes>
      </Container>
    <SimpleBottomNavigation/>
    </div>
    </BrowserRouter>
  );
}

export default App;
