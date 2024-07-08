import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import BodySection from './Components/Bodysection/BodySection.jsx';
import Jossa from './Components/Jossa/Jossa.jsx';
import { Routes,Route } from 'react-router-dom';
import AddCollege from './Components/AddCollege/AddCollege.jsx'


function App() {
  
  return (
    
    <div className="App">
      <Navbar />
      <BodySection/>
      <Routes>
        <Route path="/add-college" element={<AddCollege/>} />
        <Route path="/show-colleges" element={<Jossa />} />
      </Routes>
      <Footer />
    </div>
  
);

}

export default App
