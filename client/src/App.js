import './App.css';
import BodySection from './Components/BodySection/BodySection';
import BodySection1 from './Components/BodySection/BodySection1';
import Navbar from './Components/Navbar/Navbar';

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
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;
