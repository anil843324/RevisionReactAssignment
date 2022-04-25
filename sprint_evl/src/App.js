import { Route, Routes} from 'react-router-dom';
import './App.css';
import Form1 from './Pages/Form1';
import Form2 from './Pages/Form2';
import Users from './Pages/Users';

function App() {

   
 
  return (
    <>
        
          <Routes>
        <Route path='/' element={ <Form1/>}/>

       <Route path='/form2' element={<Form2/>} />
      <Route path='/users' element={<Users/>} />
      
       </Routes>
    </>
  );
}

export default App;
