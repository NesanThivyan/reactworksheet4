import Navbar from './components/Navbar'
import Home from './pages/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './pages/contact'
// import './App.css'

function App() {

  return (
    <>
      <Navbar /><br/><br/>
      {/* <div style={{ marginTop: '60px' }}>
        <Home />
        </div>
         */}
      <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/reactworksheet4" element={<Home />} />

        </Routes>
   
     
    </>
  )
}

export default App
