
import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/About';
import ContactForm from './pages/Contact';
import Portfolio from './pages/Portfolio';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div >
      <Header>
          
      </Header>
      <div>
          <Routes>
          
            <Route
              path="oscar/"
              element={<About />}
            />

            <Route
              path="oscar/"
              element={<About />}
            />
 

            <Route
              path="oscar/contact"
              element={<ContactForm />}
            />
            
            <Route
              path="oscar/portfolio"
              element={<Portfolio />}
            /> 

          </Routes>
        </div>

      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
