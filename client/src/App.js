import './App.css';
import BodySection from './Components/BodySection/BodySection';
import BodySection1 from './Components/BodySection/BodySection1';
import Navbar from './Components/Navbar/Navbar';

import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <BodySection/>
        <BodySection1/>
        <Footer/>
    </div>
  );
}

export default App;
