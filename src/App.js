import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from "./page/home";
import SignUp from './components/signup-form';
import SignIn from './components/signin-form';
import Info from './page/secondpage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/demo" element={<Info />} />
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
