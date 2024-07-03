import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Body1 from './Components/Body/Body1.jsx';
import Body2 from './Components/Body/Body2.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Body1/>
        <Body2/>
        <Footer/>
    </div>
  );
}

export default App;
