import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Admin from './components/Admin';
import Edit from './components/Edit';
import Add from './components/Add';
import View from './components/View';
import Error from './components/Error';
function App() {
  return (
    <div className="App">
   <h1 className='text-danger text-center mt-5'>Employee Managment system</h1>
   <Router>
     <Routes>
      <Route path="/" element={<Admin/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/view/:id" element={<View/>}/>
      <Route path={"*"} element={<Error/>}/>

     </Routes>
   </Router>
    </div>
  );
}

export default App;
