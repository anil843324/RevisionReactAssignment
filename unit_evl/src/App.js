
import { Route ,Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
 import Info from './pages/Info'; 
// import NotFound from './pages/NotFound';
 

function App() {
  return (
    <>
       <div >


        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='info/:id' element={<Info/>}/>
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
       


       </div>
      
    </>
  );
}

export default App;
