import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import BodySection from './Components/Bodysection/BodySection.jsx';
import Jossa from './Components/Jossa/Jossa.jsx';
import { Routes,Route } from 'react-router-dom';
import AddCollege from './Components/AddCollege/AddCollege.jsx'
import SignUp from './Components/signup/SignUp.jsx';
import SignIn from './Components/signin/SignIn.jsx';
import Update from './Components/update/Update.jsx';

function App() {
  
  return (
    
    <div className="App">
      <Navbar />
      <BodySection/>
      <Routes>
        <Route path='/' element={<AddCollege/>}/>
        <Route path="/show-colleges" element={<Jossa />} />
        <Route path="/update/:id" element = {<Update/>}/>
        <Route path="/signup" element = {<SignUp/>}/>
          <Route path="/signin" element = {<SignIn/>}/>
      </Routes>
      <Footer />
    </div>
  
);

}

export default App
