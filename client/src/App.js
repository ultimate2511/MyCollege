import './App.css';
import BodySection from './Components/BodySection/BodySection';
import BodySection1 from './Components/BodySection/BodySection1';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <BodySection/>
        <BodySection1/>
    </div>
  );
}

export default App;
