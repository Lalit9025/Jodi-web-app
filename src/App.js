import './App.css';
import Blogs from './component/Blogs';
import Navbar from './component/navbar';
import About from './component/Pages/About';
import ContactPage from './component/Pages/ContactPage';
import FAQs from './component/Pages/FAQs';
import Main from './Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path ='/blogs' element={<Blogs/>}/>
        <Route path ='/contactus' element={<ContactPage/>}/>
        <Route path ='/FAQs' element={<FAQs/>}/>
        <Route path ='/about' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
