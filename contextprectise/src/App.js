
import './App.css';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import  About  from "./Pages/About"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Users from "./Pages/Users"
import UsersInfo from "./Pages/UsersInfo"
import NotFound from "./Pages/NotFound"
function App() {
  return (
    <>
     <Navbar/>
       <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/users' element={<Users/>}/>
              <Route path='/users/:userId' element={<UsersInfo/>}/>
              <Route path='*' element={<NotFound/>}/>
       </Routes>

    </>
  );
}

export default App;
