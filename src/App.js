import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ResponsiveAppBar from './components/Header';


function App() {
  return (
    <BrowserRouter>
    <ResponsiveAppBar/>
    <Routes>
      <Route path='/AboutMe' element={<AboutMe/>}/>
      <Route path='/Projects' element={<Projects/>}/>
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
