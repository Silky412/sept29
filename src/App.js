import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import First from './First';
import Second from './Second';
import Error from './Error'

function App() {
  return (
   <BrowserRouter>
   <Navbar/> 
   <Routes>
      <Route index element={<First />}/>
      <Route path="/first" element={<First />} />
      <Route path="/second" element={<Second />} />
     

       <Route path='*' element={<Error/>}/> 
    </Routes>
   </BrowserRouter>
  );
}

export default App;
