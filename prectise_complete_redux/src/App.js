
import './App.css';
import AddTodo from './componets/AddTodo';
import Todolist from './componets/Todolist';
import Random from './Random';

function App() {
  return (
   <> 
    <div className='App'>
    <h1>Todolist</h1> 
   
    {/* <AddTodo/>
    <Todolist/> */}

     <Random/>
    </div>
  


   </>
  );
}

export default App;
