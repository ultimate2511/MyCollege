import './App.css';
import BodySection from './Components/BodySection/BodySection';
import BodySection1 from './Components/BodySection/BodySection1';
import Navbar from './Components/Navbar/Navbar';
import Jossa from './Components/Jossa/Jossa.jsx';
import Footer from './Components/Footer/Footer.jsx';
import JEEMainForm from './Components/JeeMainsForm/JeeMainsForm.jsx';
import ListPage from './Components/ListPage/ListPage.jsx';
import SignUp from './Components/signup/SignUp.jsx';
import SignIn from './Components/signin/SignIn.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const colleges = [
    {
      name: 'College A',
      type: 'Government',
      branch: ['Engineering', 'Medical'],
      location: 'City X',
      crl: 1000
    },
    {
      name: 'College B',
      type: 'Private',
      branch: ['Commerce', 'Engineering'],
      location: 'City Y',
      crl: 2000
    },
    {
      name: 'College C',
      type: 'Government',
      branch: ['Medical', 'Commerce'],
      location: 'City Z',
      crl: 1500
    },
    {
      name: 'College C',
      type: 'Government',
      branch: ['Medical', 'Commerce'],
      location: 'City Z',
      crl: 1500
    },
    {
      name: 'College C',
      type: 'Government',
      branch: ['Medical', 'Commerce'],
      location: 'City Z',
      crl: 1500
    },
    {
      name: 'College C',
      type: 'Government',
      branch: ['Medical', 'Commerce'],
      location: 'City Z',
      crl: 1500
    },
    {
      name: 'College C',
      type: 'Government',
      branch: ['Medical', 'Commerce'],
      location: 'City Z',
      crl: 1500
    }
  ];
  

  
  return (
    
      <div className="App">
        <Navbar />
        <BodySection/>
        <Routes>
          <Route path="/" element={<BodySection1 />} />
          <Route path="/jeemains" element={<JEEMainForm />} />
          <Route path="/jeemains/listpage" element={<ListPage colleges={colleges}/>} />
          <Route path="/jeemains/jossa" element={<Jossa/>}/>
          <Route path="/signup" element = {<SignUp/>}/>
          <Route path="/signin" element = {<SignIn/>}/>
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;
