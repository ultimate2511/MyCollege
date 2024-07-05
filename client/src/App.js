import './App.css';
import BodySection from './Components/BodySection/BodySection';
import BodySection1 from './Components/BodySection/BodySection1';
import Navbar from './Components/Navbar/Navbar';
import Jossa from './Components/Jossa/Jossa.jsx';
import Footer from './Components/Footer/Footer.jsx';
import JEEMainForm from './Components/JeeMainsForm/JeeMainsForm.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      <div className="App">
        <Navbar />
        <BodySection/>
        <Routes>
          <Route path="/" element={<BodySection1 />} />
          <Route path="/jeemains" element={<JEEMainForm />} />
          <Route path="/jeemains/jossa" element={<Jossa/>}/>
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;
