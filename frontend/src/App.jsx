import {BrowserRouter,Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'
import About from './Components/About'
import Header from './Components/Header'
import Update from './Components/Update'
import Logout from './Components/Logout'
import Profile from './Components/Profile'
import Footer from './Components/Footer'
import Signup from './Components/Signup';
import Private from './Components/Private';
function App() {
  

  return (
 <>
 
 <BrowserRouter>
 <Header />
 <Routes>
  <Route element={<Private/>}>
   <Route path="/" element={<Home />} />
   <Route path="/addproduct" element={<About />} />
   <Route path="/updateproduct" element={<Update />} />
   <Route path="/logout" element={<Logout />} />
   
   <Route path="/profile" element={<Profile />} />
   </Route>
   <Route path="/register" element={<Signup />} />
 </Routes>
 </BrowserRouter>
 {/* <Footer></Footer> */}
 </>
  )
}
export default App
